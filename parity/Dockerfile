FROM parity/parity:v1.7.2

RUN apt-get update
RUN apt-get install -y curl

RUN mkdir -p /root/.local/share/io.parity.ethereum/keys
COPY key.json /root/.local/share/io.parity.ethereum/keys/
COPY unlockpass /root/.parity-pass

COPY entry.sh /parity
WORKDIR /parity
RUN chmod +x /parity/entry.sh

ENTRYPOINT ["/parity/entry.sh"]
