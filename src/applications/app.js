/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');

const { connectToDatabase } = require('../interfaces/dataSources/databases/mongoose');
const logger = require('../interfaces/services/logger');
const injection = require('../interfaces/services/injection');

const VideoController = require('../adapters/controllers/videoController');
const ProductController = require('../adapters/controllers/productController');
const CommentController = require('../adapters/controllers/commentController');

const videoRouter = require('../interfaces/routes/videoRouter');
const productRouter = require('../interfaces/routes/productRouter');
const commentRouter = require('../interfaces/routes/commentRouter');

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

    // Controllers
    const videoController = new VideoController(injection);
    const productController = new ProductController(injection);
    const commentController = new CommentController(injection);

    // Routes
    this.app.use('/v1', videoRouter(videoController));
    this.app.use('/v1', productRouter(productController));
    this.app.use('/v1', commentRouter(commentController));

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
