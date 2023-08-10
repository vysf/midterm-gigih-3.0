require('dotenv').config();
const databaseConfig = require('./database');

module.exports = {
  server: {
    port: process.env.PORT || 5002,
    host: process.env.HOST || '127.0.0.1',
  },
  database: databaseConfig,
};
