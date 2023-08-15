module.exports = {
  mongodb: {
    uri: `${process.env.MONGODB_URI}/midterm-gigih` || 'mongodb://127.0.0.1:27017/midterm-gigih',
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
  // you can add another database config like postgreSQL etc.
};
