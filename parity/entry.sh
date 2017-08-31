#!/bin/sh

/parity/parity --chain "${CHAIN}" --unsafe-expose --jsonrpc-apis all --unlock "${UNLOCK_ADDR}" --password /root/.parity-pass --no-ui
