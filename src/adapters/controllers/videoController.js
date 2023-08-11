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

      const response = {
        status: 'succes',
        videos,
        currentPage,
        totalPage,
        limit,
      };
      res.status(200).json(response);
    } catch (error) {
      const response = {
        status: 'fail',
        message: error.message,
      };
      res.status(400).json(response);
    }
  }

  async getVideoDetail(req, res) {
    const { detailVideoUseCase } = this.injection;
    try {
      const video = await detailVideoUseCase.execute(req.params);

      const response = {
        status: 'succes',
        video,
      };

      res.status(200).json(response);
    } catch (error) {
      const response = {
        status: 'fail',
        message: error.message,
      };
      res.status(400).json(response);
    }
  }
}

module.exports = VideoController;
