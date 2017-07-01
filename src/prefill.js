const api = require('./api');
const inquirer = require('inquirer');
const EthereumUtils = require('ethereumjs-util');
const Token = require('../build/AEToken.json');
const getBalances = require('./get-balances');

let defaultAccount;
let token;

function pad (input) {
  if (input.length === 64) {
    return input;
  }

  return pad('0' + input);
}

inquirer
  .prompt([ {
    type: 'input',
    name: 'address',
    message: 'What is the contract address:',
    validate: (input) => {
      return EthereumUtils.isValidAddress(input);
    }
  } ])
  .then(({ address }) => {
    token = api.newContract(Token.abi, address);
  })
  .then(() => api.parity.defaultAccount())
  .then((_defaultAccount) => {
    defaultAccount = _defaultAccount;
  })
  .then(() => getBalances())
  .then((balances) => {
    const positions = Object.keys(balances).map((address) => {
      const paddedAddress = pad(address.replace(/^0x/, '')).toLowerCase();

      return api.util.sha3(paddedAddress + pad('1'));
    });
    const values = Object.keys(balances).map((address) => balances[address]);

    process.stdout.write('> calling the prefill method ... ');
    return token.instance.prefill
      .estimateGas({ from: defaultAccount }, [ positions, values ])
      .then((gas) => {
        return token.instance.prefill
          .postTransaction({
            from: defaultAccount,
            gas: gas.mul(1.05)
          }, [ positions, values ])
      });
  })
  .then((requestId) => {
    process.stdout.write('sign the request in the Parity Signer ... ');
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
