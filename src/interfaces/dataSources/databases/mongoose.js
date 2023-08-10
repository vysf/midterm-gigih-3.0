/* eslint-disable no-console */
const mongoose = require('mongoose');
const config = require('../../../../config/config');

mongoose.Promise = global.Promise;

const connectToDatabase = async () => {
  const { uri } = config.database.mongodb;
  const { options } = config.database.mongodb;
  try {
    await mongoose.connect(uri, options);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

const disconnectFromDatabase = async () => {
  try {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Error disconnecting from MongoDB:', error);
  }
};

module.exports = {
  connectToDatabase,
  disconnectFromDatabase,
};
