const Product = require('../entities/ProductEntitiy');

class ProductRepository {
  constructor(database) {
    this.database = database;
  }

  async findAll() {
    try {
      const products = await this.database.find({});
      return products.map(({ _doc: product }) => new Product(product));
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = ProductRepository;
