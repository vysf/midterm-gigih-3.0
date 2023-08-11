// const VideoRepository = require('../../domains/repositories/videoRepository');

class DetailVideoUseCase {
  constructor(videoRepository) {
    this.videoRepository = videoRepository;
  }

  async execute(useCaseParam) {
    const { id } = useCaseParam;
    const video = await this.videoRepository.findById(id);
    return video;
  }
}

module.exports = DetailVideoUseCase;
