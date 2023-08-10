const VideoRepository = require('../../domains/repositories/videoRepository');

class DetailVideoUseCase {
  constructor() {
    this.videoRepository = new VideoRepository();
  }

  async execute(useCaseParam) {
    const { id } = useCaseParam;
    const video = await this.videoRepository.findById(id);
    return video;
  }
}

module.exports = new DetailVideoUseCase();
