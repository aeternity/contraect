FROM node:latest

RUN apt-get update
RUN apt-get install -y curl

RUN mkdir -p /usr/src/app
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN npm install
