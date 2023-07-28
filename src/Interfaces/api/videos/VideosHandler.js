/* eslint-disable no-underscore-dangle */
class VideosHandler {
  constructor(injection) {
    this._container = injection;

    this.postVideo = this.postVideo.bind(this);
    this.getVideos = this.getVideos.bind(this);
  }

  async postVideo(req, res) {
    const { addVideoUseCase } = this._container;
    try {
      const video = await addVideoUseCase.execute(req.body);

      const response = {
        status: 'success',
        data: {
          video,
        },
      };

      res.status(200).send(response);
    } catch (error) {
      const response = {
        status: 'fail',
        message: error.message,
      };

      res.status(400).send(response);
    }
  }

  async getVideos(req, res) {
    const { getVideosUseCase } = this._container;
    try {
      const videos = await getVideosUseCase.execute();

      const response = {
        status: 'success',
        data: {
          videos,
        },
      };

      res.status(200).send(response);
    } catch (error) {
      const response = {
        status: 'fail',
        message: error.message,
      };

      res.status(400).send(response);
    }
  }
}

module.exports = VideosHandler;
