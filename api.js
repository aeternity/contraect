global.fetch = require('node-fetch');

const { Api } = require('./parity.js');

const api = new Api(new Api.Transport.Http('http://localhost:8545', -1));

// api.eth.blockNumber()
//   .then((bn) => {
//     console.warn(`(synced to block ${bn.toFormat()})\n`);
//   });

module.exports = api;
