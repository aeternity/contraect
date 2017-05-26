const inquirer = require('inquirer');
const EthereumUtils = require('ethereumjs-util');
const AEToken = require('./build/AEToken.json');

const api = require('./api');
const getBalances = require('./get-balances');

// const CONTRACT_ADDRESS = '0xE4601A50EE027138580DA8d93A71375ecdfB450e';

let ok = true;

inquirer.prompt([ {
  type: 'input',
  name: 'address',
  message: 'What is the contract address:',
  validate: (input) => {
    return EthereumUtils.isValidAddress(input);
  }
} ])
  .then(({ address }) => {
    return Promise.all([ getBalances(), address ]);
  })
  .then(([ balances, address ]) => {
    process.stdout.write('\n');
    
    const contract = api.newContract(AEToken.abi, address);
    let promise = Promise.resolve();

    Object.keys(balances).forEach((address) => {
      const expected = balances[address];

      promise = promise
        .then(() => contract.instance.balanceOf.call({}, [ address ]))
        .then((balance) => {
          const success = balance.plus(0).eq(expected);

          if (!success) {
            console.error(`> ${address} : ${balance.toNumber()} =/= ${expected}`);
            ok = false;
          }
        });
    });

    return promise;
  })
  .then((result) => {
    if (!ok) {
      process.exit(1);
    }

    console.log('> all good!');
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
