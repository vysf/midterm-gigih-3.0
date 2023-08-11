const { paginate } = require('../../interfaces/services/paginationService');
const Product = require('../entities/ProductEntitiy');

class ProductRepository {
  constructor(database) {
    this.database = database;
  }

  async findAll(pageNumber, pageSize) {
    try {
      const { pageNumber: currentPage, pageSize: limit, skip } = paginate(pageNumber, pageSize);
      const totalProduct = await this.database.countDocuments();
      const totalPages = Math.ceil(totalProduct / limit);
      const products = await this.database.find({}).skip(skip).limit(limit);

      return {
        products: products.map(({ _doc: product }) => new Product(product)),
        totalPage: totalPages,
        currentPage,
        limit,
      };
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = ProductRepository;
