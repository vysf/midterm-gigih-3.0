/* eslint-disable class-methods-use-this */
const { paginate } = require('../../interfaces/services/paginationService');
const Product = require('../entities/ProductEntitiy');
const ProductModel = require('../models/productModel');

class ProductRepository {
  async findAll(pageNumber, pageSize) {
    try {
      const { pageNumber: currentPage, pageSize: limit, skip } = paginate(pageNumber, pageSize);
      const totalProduct = await ProductModel.countDocuments();
      const totalPages = Math.ceil(totalProduct / limit);
      const products = await ProductModel.find({}).skip(skip).limit(limit);

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
