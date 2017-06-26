const path = require('path');
const csv = require('ya-csv');
const EthereumUtils = require('ethereumjs-util');

const DATA_FILEPATH = path.resolve(__dirname + '/data.csv');

function getBalances () {
  return new Promise((resolve, reject) => {
    const balances = {};

    const reader = csv.createCsvFileReader(DATA_FILEPATH, {
      separator: ';',
      quote: '"',
      escape: '"',       
      comment: '',
    });

    reader.addListener('data', (data) => {
      const [ address, rawAmount ] = data;
      const amount = parseInt(rawAmount);

      if (!balances[address]) {
        balances[address] = 0;
      }

      balances[address] += amount;
    });

    reader.addListener('error', (error) => {
      reject(error);
    });

    reader.addListener('end', () => {
      resolve(balances);
    });
  });
}

module.exports = getBalances;
