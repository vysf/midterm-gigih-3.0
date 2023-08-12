class GetVideosUseCase {
  constructor(videoRepository) {
    this.videoRepository = videoRepository;
  }

  async execute() {
    const videos = await this.videoRepository.findAll();
    return videos;
  }
}

module.exports = GetVideosUseCase;
