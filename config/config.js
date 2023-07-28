module.exports = {
  port: process.env.PORT || 5002,
  host: process.env.HOST || '127.0.0.1',
  mongo: {
    uri: process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/midterm-gigih',
  },
};
