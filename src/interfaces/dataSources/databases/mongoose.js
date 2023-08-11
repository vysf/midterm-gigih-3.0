/* eslint-disable no-console */
const mongoose = require('mongoose');
const config = require('../../../../config/config');
const SimpleLogger = require('../../services/logger');

mongoose.Promise = global.Promise;
const logger = new SimpleLogger('mongooose');

const connectToDatabase = async () => {
  const { uri } = config.database.mongodb;
  const { options } = config.database.mongodb;
  try {
    await mongoose.connect(uri, options);
    logger.info('Connected to MongoDB');
  } catch (error) {
    logger.error(`Error connecting to MongoDB:\n ${error}`);
  }
};

const disconnectFromDatabase = async () => {
  try {
    await mongoose.disconnect();
    logger.info('Disconnected from MongoDB');
  } catch (error) {
    logger.error(`Error disconnecting to MongoDB:\n ${error}`);
  }
};

module.exports = {
  connectToDatabase,
  disconnectFromDatabase,
};
