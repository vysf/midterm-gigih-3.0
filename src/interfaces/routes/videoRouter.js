const express = require('express');

const router = express.Router();

function videoRouter(controller) {
  router.get('/videos', (req, res) => controller.getAllVideos(req, res));
  router.get('/videos/:id', (req, res) => controller.getVideoDetail(req, res));

  return router;
}

module.exports = videoRouter;
