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

      const response = {
        status: 'succes',
        products,
        currentPage,
        totalPage,
        limit,
      };

      res.status(200).json(response);
    } catch (error) {
      const response = {
        status: 'fail',
        message: error.message,
      };
      res.status(400).json(response);
    }
  }
}

module.exports = ProductController;
