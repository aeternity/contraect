const fs = require('fs');
const path = require('path');

const api = require('./api');
const inquirer = require('inquirer');
const AEToken = require('../build/AEToken.json');

const contract = api.newContract(AEToken.abi);
const DEPLOYED_ADDRESS_FILEPATH = path.resolve(__dirname, '../.last-contract-address');

let accounts;

return api.parity.allAccountsInfo()
  .then((accountsInfo) => {
    accounts = Object.keys(accountsInfo)
      .filter((address) => accountsInfo[address].uuid)
      .map((address) => {
        return Object.assign({ address }, accountsInfo[address]);
      });
  })
  .then(() => {
    return inquirer
      .prompt([
        {
          type: 'list',
          name: 'account',
          message: 'What account should be used:',
          choices: accounts.map((account) => ({
            name: account.name || account.address,
            value: account.address
          }))
        }
      ]);
  })
  .then(({ account }) => {
    api.sender.address = account;
  })
  .then(() => {
    return inquirer
      .prompt([
        {
          mask: '*',
          type: 'password',
          name: 'password',
          message: 'What is your account password:',
          validate: function (input) {
            const done = this.async();

            return api.parity.testPassword(api.sender.address, input)
              .then((success) => {
                if (success) {
                  return done(null, true);
                }

                return done('invalid password')
              })
              .catch((error) => {
                console.error(error);
              });
          }
        }
      ]);
  })
  .then(({ password }) => {
    api.sender.password = password;
    process.stdout.write('\n');
  })
  .then(() => {
    return contract
      .deploy({
        from: api.sender.address,
        data: AEToken.bytecode
      }, [], (error, data) => {
        if (data.state === 'postTransaction') {
          return process.stdout.write('> posting the transaction ... ');
        } 

        if (data.state === 'getTransactionReceipt') {
          console.log('done!');
          return process.stdout.write(`> sending the transaction with hash ${data.txhash} ... `);
        }        
      });
  })
  .then((contractAddress) => {
    fs.writeFileSync(DEPLOYED_ADDRESS_FILEPATH, contractAddress);
    console.log('done!\n> contract deployed at', contractAddress);
  })
  .catch((error) => {
    if (error.type === 'EXECUTION_ERROR') {
      console.error('EXECUTION_ERROR: Something went wrong in the contract...');
      return process.exit(1);
    }

    console.error(error);
    process.exit(1);
  });
