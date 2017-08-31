const fs = require('fs');
const path = require('path');

const inquirer = require('inquirer');
const EthereumUtils = require('ethereumjs-util');
const AEToken = require('../build/AEToken.json');

const api = require('./api');

const DEPLOYED_ADDRESS_FILEPATH = path.resolve(__dirname, '../.last-contract-address');
let defaultAddress = undefined;

try {
  defaultAddress = fs.readFileSync(DEPLOYED_ADDRESS_FILEPATH).toString().trim();
} catch (e) {}

let ok = true;

inquirer.prompt([ {
  default: defaultAddress,
  type: 'input',
  name: 'address',
  message: 'What is the contract address:',
  validate: (input) => {
    return EthereumUtils.isValidAddress(input);
  }
} ])
  .then(({ address }) => {
    const contract = api.newContract(AEToken.abi, address);
		return contract.instance.transferableUntil.call();
  })
  .then((result) => {
    if (!ok) {
      process.exit(1);
    }
		// Result is a bignumber holding the UNIX epoch, which needs to be multiplied
		// by 1000 because javascript uses ms instead of s for Date().
		var d = new Date(result.times(1000).toNumber());
		console.log("transferable until: ", d);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

