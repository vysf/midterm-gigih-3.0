const express = require('express');

const router = express.Router();

function productRouter(controller) {
  router.get('/products', (req, res) => controller.getAllProducts(req, res));

  return router;
}

module.exports = productRouter;
