const api = require('./api');
const inquirer = require('inquirer');
const EthereumUtils = require('ethereumjs-util');
const Token = require('./build/Token.json');
const BulkTokenTransfer = require('./build/BulkTokenTransfer.json');
const getBalances = require('./get-balances');

// const tokenAddress = '0x41ada3d5ABa368D37f75bbC1413EE1503786558f';

let token;
const bulkTransfer = api.newContract(BulkTokenTransfer.abi);

let defaultAccount;
let totalAmount;


inquirer.prompt([ {
  type: 'input',
  name: 'address',
  message: 'What is the contract address:',
  validate: (input) => {
    return EthereumUtils.isValidAddress(input);
  }
} ])
  .then(({ address }) => {
    token = api.newContract(Token.abi, address);
    return getBalances();
  })
  .then((balances) => {
    totalAmount = Object.keys(balances).reduce((total, a) => total + balances[a], 0);
  })
  .then(() => api.parity.defaultAccount())
  .then((_defaultAccount) => {
    defaultAccount = _defaultAccount;

    return bulkTransfer
      .deploy({
        from: defaultAccount,
        data: BulkTokenTransfer.bytecode
      }, [ token.address ], (error, data) => {
        if (data.state === 'postTransaction') {
          return process.stdout.write('> posting the transaction... ');
        }

        if (data.state === 'checkRequest') {
          console.log(' done!');
          return process.stdout.write('> sign the request in the Parity Signer... ');
        }   

        if (data.state === 'getTransactionReceipt') {
          console.log(' done!');
          return process.stdout.write(`> sending the transaction with hash ${data.txhash} ... `);
        }        
      });
  })
  .then((contractAddress) => {
    console.log(' done!\n> bulk transfer contract deployed at', contractAddress);
    process.stdout.write('> calling the approve method for token transfer... ');
    return token.instance.approve
      .postTransaction({ from: defaultAccount }, [ bulkTransfer.address, totalAmount ]);
  })
  .then((requestId) => {
    process.stdout.write('sign the request in the Parity Signer... ');
    return token._pollCheckRequest(requestId)
      .then((txhash) => token._pollTransactionReceipt(txhash));
  })
  .then(() => {
    console.log(' done!');
    process.stdout.write('> calling the prefill method for bulk token transfer... ');
    return bulkTransfer.instance.prefill
      .postTransaction({ from: defaultAccount }, []);
  })
  .then((requestId) => {
    process.stdout.write('sign the request in the Parity Signer... ');
    return token._pollCheckRequest(requestId)
      .then((txhash) => token._pollTransactionReceipt(txhash));
  })
  .then(() => {
    console.log(' done!');
  })
  .catch((error) => {
    if (error.type === 'EXECUTION_ERROR') {
      console.error('EXECUTION_ERROR: Something went wrong in the contract...');
      return process.exit(1);
    }

    console.error(error);
    process.exit(1);
  });
