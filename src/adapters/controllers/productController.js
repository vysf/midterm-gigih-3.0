const express = require('express');
const GetProductsUseCase = require('../../applications/useCases/getProductsUseCase');

const router = express.Router();

router.get('/products', async (req, res) => {
  try {
    const {
      products,
      currentPage,
      totalPage,
      limit,
    } = await GetProductsUseCase.execute(req.query);

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
});

module.exports = router;
