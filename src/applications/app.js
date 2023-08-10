/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const videoController = require('../adapters/controllers/videoController');
const commentController = require('../adapters/controllers/commentController');
const productController = require('../adapters/controllers/productController');
// const authMiddleware = require('../adapters/middlewares/authMiddleware');
const { connectToDatabase } = require('../interfaces/dataSources/databases/mongoose');
const logger = require('../interfaces/services/logger');

class App {
  constructor() {
    this.app = express();
    this.configure();
  }

  configure() {
    // Middleware
    this.app.use(bodyParser.json());
    this.app.use(
      bodyParser.urlencoded({
        extended: true,
      }),
    );
    // this.app.use(authMiddleware);

    // Routes
    // this.app.use('/v1', userController);
    this.app.use('/v1', videoController);
    this.app.use('/v1', productController);
    this.app.use('/v1', commentController);

    // Connect to the database
    connectToDatabase();

    // Logger
    this.app.use((req, res, next) => {
      logger(`${req.method} ${req.url}`);
      next();
    });
  }

  start(port, host) {
    this.app.listen(port, () => {
      console.log(`Server is running on port http://${host}:${port}`);
    });
  }
}

module.exports = App;
