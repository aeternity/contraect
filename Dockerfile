FROM node:latest

RUN apt-get update
RUN apt-get install -y curl

RUN mkdir -p /usr/src/app
COPY package.json /usr/src/app
WORKDIR /usr/src/app
RUN npm install
RUN npm install -g truffle
COPY . /usr/src/app
