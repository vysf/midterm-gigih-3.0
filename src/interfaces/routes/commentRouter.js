const express = require('express');

const router = express.Router();

function commentRouter(controller) {
  router.get('/comments/:id', (req, res, next) => controller.getAllCommentsOnVideo(req, res, next));
  router.post('/comments/:id', (req, res, next) => controller.postCommentOnVideo(req, res, next));

  return router;
}

module.exports = commentRouter;
