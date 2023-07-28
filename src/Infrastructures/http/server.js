/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');

const server = express();

server.use(bodyParser.json());
server.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

server.use((req, res, next) => {
  res.setHeader(
    'Access-Control-Allow-Origin',
    '*',
  );

  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE',
  );

  // if this needed
  // Authorization, Cache-control or Pragma, etc
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With, Content-type',
  );

  next();
});

module.exports = server;
