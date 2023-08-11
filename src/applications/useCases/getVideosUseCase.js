// const VideoRepository = require('../../domains/repositories/videoRepository');

class GetVideosUseCase {
  constructor(videoRepository) {
    this.videoRepository = videoRepository;
  }

  async execute(useCaseQuery) {
    const { pageNumber, pageSize } = useCaseQuery;
    const videos = await this.videoRepository.findAll(pageNumber, pageSize);
    return videos;
  }
}

module.exports = GetVideosUseCase;
