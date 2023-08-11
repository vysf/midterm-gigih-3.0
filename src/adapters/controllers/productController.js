const SimpleLogger = require('../../interfaces/services/logger');
const sendResponse = require('../../interfaces/services/responseUtil');

class ProductController {
  constructor(injection) {
    this.injection = injection;
    this.logger = new SimpleLogger(this.constructor.name);
  }

  async getAllProducts(req, res) {
    this.logger.info(JSON.stringify(req.query));
    const { getProductsUseCase } = this.injection;
    try {
      const {
        products,
        currentPage,
        totalPage,
        limit,
      } = await getProductsUseCase.execute(req.query);

      sendResponse(res, 200, 'success', null, {
        products,
        currentPage,
        totalPage,
        limit,
      });

      this.logger.info('Success to get all products request');
    } catch (error) {
      sendResponse(res, 400, 'fail', error.message, null);
      this.logger.error('Fail to get all products request');
    }
  }
}

module.exports = ProductController;
