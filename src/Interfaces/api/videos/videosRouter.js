const express = require('express');

function videosRouter(handler) {
  const router = express.Router();

  router.post('/videos', handler.postVideo);
  router.get('/videos', handler.getVideos);

  return router;
}

module.exports = videosRouter;
