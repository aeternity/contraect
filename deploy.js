const api = require('./api');
const AEToken = require('./build/AEToken.json');

const contract = api.newContract(AEToken.abi);

api.parity.defaultAccount()
  .then((defaultAccount) => {
    return contract
      .deploy({
        from: defaultAccount,
        data: AEToken.bytecode
      }, [], (error, data) => {
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
    console.log(' done!\n> contract deployed at', contractAddress);
  })
  .catch((error) => {
    if (error.type === 'EXECUTION_ERROR') {
      console.error('EXECUTION_ERROR: Something went wrong in the contract...');
      return process.exit(1);
    }

    console.error(error);
    process.exit(1);
  });
