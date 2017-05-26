# Token deployment and bulk transfer

Have the Parity Signer ready to be used, at http://127.0.0.1:8180.

## Deploy the AEToken contract

```bash
## Compile the contracts in `./contracts/*.sol`
$> node compile.js

## Deploy the AEToken contract
$> node deploy.js
```

This will print the deployed contract address. Please write it down,
it will be asked for the bulk transfers and verification.

## Bulk Transfer Tokens

```bash
## Generate the BulkTransfer contract from the
## data in `./data.csv`
$> node generator.js > contracts/bulk-token-transfer.sol

## Compile the contracts in `./contracts/*.sol`
$> node compile.js

## Execute the bulk transfer
$> node bulk-transfer.js
```

## Verify the data

```bash
## Verify the data in `./data.csv` against the
## contract on the blockchain
$> node verify.js
```

## Verify the contract on Etherscan

You can verify the contract on Etherescan by choosing the right
Solidity version that is in `build/<...>.json`, in the metadata
field.

Imports won't work so instead of imports just copy paste the content
of the imported file.
