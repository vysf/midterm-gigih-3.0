const SimpleLogger = require('../../interfaces/services/logger');

const logRequest = (req, res, next) => {
  const logger = new SimpleLogger('App');
  logger.info(`${req.method} ${req.url}`);
  next();
};

module.exports = logRequest;
