class GetProductsUseCase {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }

  async execute(useCaseQuery) {
    const { pageNumber, pageSize } = useCaseQuery;
    const products = await this.productRepository.findAll(pageNumber, pageSize);
    return products;
  }
}

module.exports = GetProductsUseCase;
