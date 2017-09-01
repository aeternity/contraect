FROM mhart/alpine-node:6.9.2

RUN apk add --no-cache make gcc g++ python git bash
RUN mkdir -p /src
RUN git clone https://github.com/ethereumjs/testrpc /src
WORKDIR /src
RUN npm install

EXPOSE 8548

ENTRYPOINT ["node", "./build/cli.node.js", "--port", "8548"]
