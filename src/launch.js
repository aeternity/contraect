const fs = require('fs');
const path = require('path');

const api = require('./api');
const inquirer = require('inquirer');
const EthereumUtils = require('ethereumjs-util');
const Token = require('../build/AEToken.json');
const getBalances = require('./get-balances');

const DEPLOYED_ADDRESS_FILEPATH = path.resolve(__dirname, '../.last-contract-address');
let defaultAddress = undefined;

try {
  defaultAddress = fs.readFileSync(DEPLOYED_ADDRESS_FILEPATH).toString().trim();
} catch (e) {}

let creator;
let token;

inquirer
  .prompt([
    {
      default: defaultAddress,
      type: 'input',
      name: 'address',
      message: 'What is the contract address:',
      validate: (input) => {
        return EthereumUtils.isValidAddress(input)
          ? true
          : 'invalid contract address';
      }
    }
  ])
  .then(({ address }) => {
    token = api.newContract(Token.abi, address);

    return token.instance.creator.call({}, []);
  })
  .then((_creator) => {
    creator = _creator;
    api.sender.address = creator;
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

            return api.parity.testPassword(creator, input)
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
	.then(() => launch())
  .catch((error) => {
    if (error.type === 'EXECUTION_ERROR') {
      console.error('EXECUTION_ERROR: Something went wrong in the contract...');
      return process.exit(1);
    }

    console.error(error);
    process.exit(1);
  });

function launch () {
  return token.instance.launch
    .estimateGas({ from: creator })
    .then((_gas) => {
      const gas = _gas.mul(1.01).round();

      return token.instance.launch
        .postTransaction({
          from: creator,
        })
    })
    .then((requestId) => {
      return token._pollCheckRequest(requestId)
        .then((txhash) => token._pollTransactionReceipt(txhash));
    })
    .then(() => {
      console.log('launched!');
    });
}

