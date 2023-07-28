const express = require('express');

function commentsRouter(handler) {
  const router = express.Router();

  router.post('/comments', handler.postComment);
  router.get('/comments', handler.getCommentsInVideo);

  return router;
}

module.exports = commentsRouter;
