const SimpleLogger = require('../../interfaces/services/logger');
const sendResponse = require('../../interfaces/services/responseUtil');

class VideoController {
  constructor(injection) {
    this.injection = injection;
    this.logger = new SimpleLogger(this.constructor.name);
  }

  async getAllVideos(req, res) {
    // this.logger.info(JSON.stringify(req.query));
    const { getVideosUseCase } = this.injection;
    try {
      const videos = await getVideosUseCase.execute();

      sendResponse(res, 200, 'success', null, {
        videos,
      });
      this.logger.info('Success to get all videos request');
    } catch (error) {
      sendResponse(res, 400, 'fail', error.message, null);
      this.logger.error('Fail to get all videos request');
    }
  }

  async getVideoDetail(req, res) {
    const { detailVideoUseCase } = this.injection;
    try {
      const video = await detailVideoUseCase.execute(req.params);

      sendResponse(res, 200, 'success', null, {
        video,
      });
      this.logger.info('Success to get a video request');
    } catch (error) {
      sendResponse(res, 400, 'fail', error.message, null);
      this.logger.error('Fail to get a video request');
    }
  }
}

module.exports = VideoController;
