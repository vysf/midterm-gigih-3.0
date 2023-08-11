const sendResponse = require('../../interfaces/services/responseUtil');

class ProductController {
  constructor(injection) {
    this.injection = injection;
  }

  async getAllProducts(req, res) {
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
    } catch (error) {
      sendResponse(res, 400, 'fail', error.message, null);
    }
  }
}

module.exports = ProductController;
