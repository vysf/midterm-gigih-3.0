// const CommentRepository = require('../../domains/repositories/commentRepository');

class GetCommentsUseCase {
  constructor(commentRepository) {
    this.commentRepository = commentRepository;
  }

  async execute(useCaseParams, useCaseQuery) {
    const { id: videoId } = useCaseParams;
    const { pageNumber, pageSize } = useCaseQuery;

    const comments = await this.commentRepository.findByVideoId(videoId, pageNumber, pageSize);
    return comments;
  }
}

module.exports = GetCommentsUseCase;
