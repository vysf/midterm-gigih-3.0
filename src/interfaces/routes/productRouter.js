const express = require('express');

const router = express.Router();

function productRouter(controller) {
  router.get('/products', (req, res, next) => controller.getAllProducts(req, res, next));

  return router;
}

module.exports = productRouter;
