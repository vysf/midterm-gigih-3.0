const SimpleLogger = require('../../interfaces/services/logger');
const sendResponse = require('../../interfaces/services/responseUtil');

class VideoController {
  constructor(injection) {
    this.injection = injection;
    this.logger = new SimpleLogger(this.constructor.name);
  }

  async getAllVideos(req, res, next) {
    try {
      const { getVideosUseCase } = this.injection;
      const videos = await getVideosUseCase.execute();

      this.logger.info('Success to get all videos request');
      sendResponse(res, 200, 'success', null, {
        videos,
      });
    } catch (error) {
      this.logger.error('Fail to get all videos request');
      sendResponse(res, 400, 'fail', error.message, null);
      next(error);
    }
  }

  async getVideoDetail(req, res, next) {
    try {
      const { detailVideoUseCase } = this.injection;
      const video = await detailVideoUseCase.execute(req.params);

      this.logger.info('Success to get a video request');
      sendResponse(res, 200, 'success', null, {
        video,
      });
    } catch (error) {
      this.logger.error('Fail to get a video request');
      // sendResponse(res, 400, 'fail', error.message, null);
      next(error);
    }
  }
}

module.exports = VideoController;
