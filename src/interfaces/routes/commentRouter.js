const express = require('express');

const router = express.Router();

function commentRouter(controller) {
  router.get('/comments/:id', (req, res) => controller.getAllCommentsOnVideo(req, res));
  router.post('/comments/:id', (req, res) => controller.postCommentOnVideo(req, res));

  return router;
}

module.exports = commentRouter;
