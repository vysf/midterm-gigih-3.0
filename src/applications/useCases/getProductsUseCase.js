const ProductRepository = require('../../domains/repositories/productRepository');

class GetProductsUseCase {
  constructor() {
    this.productRepository = new ProductRepository();
  }

  async execute(useCaseQuery) {
    const { pageNumber, pageSize } = useCaseQuery;
    const products = await this.productRepository.findAll(pageNumber, pageSize);
    return products;
  }
}

module.exports = new GetProductsUseCase();
