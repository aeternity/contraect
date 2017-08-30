# Token deployment and bulk transfer

Have the Parity Signer ready to be used, at http://127.0.0.1:8180.
The easiest way to run these scripts is by using the supplied `docker-compose.yml`

```bash
# build and start parity
$> docker-compose build
$> docker-compose up -d parity-node
# start up the script docker image and connect to it
$> docker-compose run --rm scripts bash
```

## Deploy the AEToken contract

```bash
## Compile the contracts in `./src/contracts/*.sol`
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
