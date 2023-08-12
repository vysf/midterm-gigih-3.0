const SimpleLogger = require('../../interfaces/services/logger');
const sendResponse = require('../../interfaces/services/responseUtil');

class ProductController {
  constructor(injection) {
    this.injection = injection;
    this.logger = new SimpleLogger(this.constructor.name);
  }

  async getAllProducts(req, res) {
    // this.logger.info(JSON.stringify(req.query));
    const { getProductsUseCase } = this.injection;
    try {
      const products = await getProductsUseCase.execute();

      sendResponse(res, 200, 'success', null, {
        products,
      });

      this.logger.info('Success to get all products request');
    } catch (error) {
      sendResponse(res, 400, 'fail', error.message, null);
      this.logger.error('Fail to get all products request');
    }
  }
}

module.exports = ProductController;
