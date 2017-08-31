# parity

***This sets up a docker image to be used for development***. It assumes that we have a
`key.json` file in the [secret storage format](https://github.com/ethereum/wiki/wiki/Web3-Secret-Storage-Definition), 
which you can exported from parity, generated from [here](https://github.com/ethereumjs/keythereum)
or other means. The password to unlock that account should be placed in the `unlockpass`
file. The parity node is going to start synchronizing with the network from scratch on
every restart because the chain is not stored persistently outside of the container.

This image uses parity 1.7.2 running on ubuntu 14.04 based on [this Dockerfile](https://github.com/paritytech/parity/blob/master/docker/hub/Dockerfile)

