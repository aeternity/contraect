const path = require('path');
const fs = require('fs');

const getBalances = require('./get-balances');

const CONTRACT_FILEPATH = path.resolve(__dirname + '/contracts/bulk-token-transfer.template.sol');

getBalances()
  .then((balances) => {
    const totalAmount = Object
      .keys(balances)
      .map((address) => balances[address])
      .reduce((total, amount) => total + amount, 0);

    const contractCode = fs.readFileSync(CONTRACT_FILEPATH).toString();
    const contractLines = contractCode.split('\n');

    const prefillLineIndex = contractLines.findIndex((line) => /::prefill_data::/.test(line));
    const prefillPadding = /^\s*/.exec(contractLines[prefillLineIndex])[0];

    const prefilledBalances = Object.keys(balances).map((address) => {
      const amount = balances[address];

      return `${prefillPadding}token.transferFrom(msg.sender, ${address}, ${amount});`;
    });

    contractLines[prefillLineIndex] = prefilledBalances.join('\n');

    const checkLineIndex = contractLines.findIndex((line) => /::prefill_check::/.test(line));
    const checkPadding = /^\s*/.exec(contractLines[checkLineIndex])[0];

    contractLines[checkLineIndex] = [
      `${checkPadding}if (token.allowance(msg.sender, this) < ${totalAmount}) { throw; }`,
      `${checkPadding}if (token.balanceOf(msg.sender) < ${totalAmount}) { throw; }`
    ].join('\n');

    const generatedContract = contractLines.join('\n');

    return generatedContract;
  })
  .then((result) => {
    process.stdout.write(result);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
