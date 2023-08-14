const express = require('express');

const router = express.Router();

function videoRouter(controller) {
  router.get('/videos', (req, res, next) => controller.getAllVideos(req, res, next));
  router.get('/videos/:id', (req, res, next) => controller.getVideoDetail(req, res, next));

  return router;
}

module.exports = videoRouter;
