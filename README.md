# Token deployment and bulk transfer

The easiest way to run these scripts is by using the supplied `docker-compose.yml`

```bash
# build and start parity
$> docker-compose build
$> docker-compose up -d parity-node
# start up the script docker image and connect to it
$> docker-compose run --rm scripts bash
```

All the node scripts expect a parity instance to be accessible via `http://localhost:8545`.
If that is not the case then use the scripts like so:

```bash
$> node src/deploy.js http://192.168.99.100:8545
```

## Deploy the AEToken contract

```bash
## Compile the contracts in `./contracts/*.sol`
$> node src/compile.js

## Deploy the AEToken contract
$> node src/deploy.js
```

This will print the deployed contract address. Please write it down,
it will be asked for the bulk transfers and verification.

## Prefill the Token

```bash
## Prefill the token contract with
## data in `./data.csv`
$> node src/prefill.js
```

## Verify the data

```bash
## Verify the data in `./data.csv` against the
## contract on the blockchain
$> node src/verify.js
```

## Check the launch status

```bash
## checks prefilled variable in the deployed contract.
## If that variable is set to true then tokens are transferable.
$> node src/launch_status.js
```

## Check transferable until date

```bash
## checks transferableUntil variable in the deployed contract,
## which sets the point in time until tokens can be traded.
$> node src/transferable_until.js
```

## Launch

```bash
## Calls the launch() function, which then sets the prefilled
## variable to true.
$> node src/launch.js
```

## Verify the contract on Etherscan

You can verify the contract on Etherescan by choosing the right
Solidity version that is in `build/<...>.json`, in the metadata
field.

Imports won't work so instead of imports just copy paste the content
of the imported file.

# Testing

Tests can be ran with truffle either from within the `scripts` container or
against any other [testrpc](https://github.com/ethereumjs/testrpc) instance.
Please make sure to set the proper `host` in the `truffle.js` file.
