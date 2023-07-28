/* eslint-disable no-console */
function connection(mongoose, config, options) {
  const connectToMongo = async () => {
    try {
      await mongoose.connect(config.mongo.uri);
    } catch (error) {
      console.log(error);
    }
  };

  mongoose.connection.on('connected', () => {
    console.info('Connected to MongoDB!');
  });

  mongoose.connection.on('reconnected', () => {
    console.info('MongoDB reconnected!');
  });

  mongoose.connection.on('error', (error) => {
    console.error(`Error in MongoDb connection: ${error}`);
    mongoose.disconnect();
  });

  mongoose.connection.on('disconnected', () => {
    console.error(
      `MongoDB disconnected! Reconnecting in ${
        options.reconnectInterval / 1000
      }s...`,
    );
    setTimeout(() => connectToMongo(), options.reconnectInterval);
  });

  return {
    connectToMongo,
  };
}

module.exports = connection;
