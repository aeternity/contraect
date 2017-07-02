global.fetch = require('node-fetch');

const { Api } = require('./parity.js');

// Gas price set to 2 GWei
const GAS_PRICE = 2 * Math.pow(10, 9);

const api = new Api(new Api.Transport.Http('http://localhost:8545', -1));

api.sender = {
  address: '',
  password: ''
};

const checkRequest = api.parity.checkRequest.bind(api);
const postTransaction = api.parity.postTransaction.bind(api);

let nextRequestId = 1;
let requests = {};

api.parity.postTransaction = (_options) => {
  // Set the gas price to 0
  const options = Object.assign({}, _options, { gasPrice: GAS_PRICE });
  const sender = api.sender;

  let transactionPromise;

  if (options.from && sender.address && options.from.toLowerCase() === sender.address.toLowerCase()) {
    transactionPromise = api.personal.sendTransaction(options, sender.password)
      .then((txHash) => {
        const requestId = `local::${nextRequestId}`;

        nextRequestId++;
        requests[requestId] = txHash;
        return requestId;
      });
  } else {
    transactionPromise = postTransaction(options);
  }

  return transactionPromise;
};


api.parity.checkRequest = (requestId) => {
  if (requests[requestId]) {
    return Promise.resolve(requests[requestId]);
  }

  return checkRequest(requestId);
};

module.exports = api;
