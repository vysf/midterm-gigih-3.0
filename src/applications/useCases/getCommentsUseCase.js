class GetCommentsUseCase {
  constructor(commentRepository) {
    this.commentRepository = commentRepository;
  }

  async execute(useCaseParams) {
    const { id: videoId } = useCaseParams;
    const comments = await this.commentRepository.findByVideoId(videoId);
    return comments;
  }
}

module.exports = GetCommentsUseCase;
