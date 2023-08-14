const SimpleLogger = require('../../interfaces/services/logger');
const sendResponse = require('../../interfaces/services/responseUtil');

class ProductController {
  constructor(injection) {
    this.injection = injection;
    this.logger = new SimpleLogger(this.constructor.name);
  }

  async getAllProducts(req, res, next) {
    // this.logger.info(JSON.stringify(req.query));
    try {
      const { getProductsUseCase } = this.injection;
      const products = await getProductsUseCase.execute();

      this.logger.info('Success to get all products request');
      sendResponse(res, 200, 'success', null, {
        products,
      });
    } catch (error) {
      this.logger.error('Fail to get all products request');
      sendResponse(res, 400, 'fail', error.message, null);
      next(error);
    }
  }
}

module.exports = ProductController;
