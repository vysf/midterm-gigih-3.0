const sendResponse = require('../../interfaces/services/responseUtil');

class VideoController {
  constructor(injection) {
    this.injection = injection;
  }

  async getAllVideos(req, res) {
    const { getVideosUseCase } = this.injection;
    try {
      const {
        videos,
        currentPage,
        totalPage,
        limit,
      } = await getVideosUseCase.execute(req.query);

      sendResponse(res, 200, 'success', null, {
        videos,
        currentPage,
        totalPage,
        limit,
      });
    } catch (error) {
      sendResponse(res, 400, 'fail', error.message, null);
    }
  }

  async getVideoDetail(req, res) {
    const { detailVideoUseCase } = this.injection;
    try {
      const video = await detailVideoUseCase.execute(req.params);

      sendResponse(res, 200, 'success', null, {
        video,
      });
    } catch (error) {
      sendResponse(res, 400, 'fail', error.message, null);
    }
  }
}

module.exports = VideoController;
