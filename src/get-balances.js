const path = require('path');
const csv = require('ya-csv');
const EthereumUtils = require('ethereumjs-util');
const big = require('big.js');

//const DECIMALS = 10000000000000000;
var BIGD = big(10).pow(18);

const DATA_FILEPATH = path.resolve(__dirname + '/../data.csv');

function getBalances () {
  return new Promise((resolve, reject) => {
    const balances = {};

    const reader = csv.createCsvFileReader(DATA_FILEPATH, {
      separator: ',',
      quote: '"',
      escape: '"',
      comment: '',
			columnsFromHeader: true,
    });

    reader.addListener('data', (data) => {
      const [ address, rawAmount ] = [data["Address"], data["Tokens"]] ;
			//console.log(address, rawAmount);
			var bRaw = big(rawAmount);
			var bOut = bRaw.times(BIGD);

      if (!balances[address]) {
        balances[address] = big(0);
      }

      balances[address] = balances[address].plus(bOut);
    });

    reader.addListener('error', (error) => {
      reject(error);
    });

    reader.addListener('end', () => {
			// Convert the big numbers to strings, so that parity.js, which uses 
			// bignumber.js can import them. If they are Numbers instead of Strings,
			// bignumber.js complains that it can only handle numbers with 15 significant
			// digits. .toFixed(0) so we don't end up with any decimals.
			Object.keys(balances).map((a) => balances[a] = balances[a].toFixed(0));
      resolve(balances);
    });
  });
}

module.exports = getBalances;
