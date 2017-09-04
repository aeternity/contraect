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
      const [ address, rawAmount ] = [data["Address"], data["AE"]] ;
			var bRaw = big(rawAmount);
			var bOut = bRaw.times(BIGD);
			// The csv contains address with and without checksums, so we need to convert
			// them in order for the balances to match up.
			const addr = address.toLowerCase();

      if (!balances[addr]) {
        balances[addr] = big(0);
      }

      balances[addr] = balances[addr].plus(bOut);
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
