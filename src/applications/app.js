/* eslint-disable consistent-return */
/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { connectToDatabase } = require('../interfaces/dataSources/databases/mongoose');
const SimpleLogger = require('../interfaces/services/logger');
const ClientError = require('../domains/errors/ClientError');
const DomainErrorTranslator = require('../domains/errors/DomainErrorTranslator');
const logRequest = require('../adapters/middlewares/loggerMiddleware');

const VideoController = require('../adapters/controllers/videoController');
const ProductController = require('../adapters/controllers/productController');
const CommentController = require('../adapters/controllers/commentController');

const videoRouter = require('../interfaces/routes/videoRouter');
const productRouter = require('../interfaces/routes/productRouter');
const commentRouter = require('../interfaces/routes/commentRouter');
const NotFoundError = require('../domains/errors/NotFoundError');

class App {
  constructor(injection) {
    this.app = express();
    this.injection = injection;
    this.moduleName = this.constructor.name;
    this.logger = new SimpleLogger(this.moduleName);
    this.configure();
  }

  configure() {
    // Middlewares
    // this.app.use(cors({
    //   origin: ['http://localhost:5173/', 'http://172.23.16.1:5173/', 'http://192.168.1.13:5173/'],
    // }));
    this.app.use(cors({
      origin: ['http://localhost:5173', 'http://172.23.16.1:5173', 'http://192.168.1.13:5173'],
    }));
    this.app.use(bodyParser.json());
    this.app.use(
      bodyParser.urlencoded({
        extended: true,
      }),
    );
    this.app.use(logRequest);

    // Controllers
    const videoController = new VideoController(this.injection);
    const productController = new ProductController(this.injection);
    const commentController = new CommentController(this.injection);

    // Routes
    this.app.use('/v1', videoRouter(videoController));
    this.app.use('/v1', productRouter(productController));
    this.app.use('/v1', commentRouter(commentController));

    // handling unregistered route
    this.app.use('*', (req, res, next) => {
      const err = new NotFoundError('Invalid Route');
      next(err);
    });

    // Error Handler
    this.app.use((err, req, res, next) => {
      if (err instanceof Error) {
        const translatedError = DomainErrorTranslator.translate(err);
        if (translatedError instanceof ClientError) {
          this.logger.error(`${err.message}`);
          return res.status(translatedError.statusCode).json({ status: 'fail', message: translatedError.message });
        }

        this.logger.error(`${err.message}`);
        return res.status(500).json({ status: 'error', message: 'terjadi kegagalan pada server kami' });
      }
      next();
    });

    // Connect to the database
    connectToDatabase();
  }

  start(port, host) {
    this.app.listen(port, () => {
      this.logger.info(`Server is running on port http://${host}:${port}`);
    });
  }
}

module.exports = App;
