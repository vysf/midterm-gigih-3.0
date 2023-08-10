const CreateCommentEntitiy = require('../../domains/entities/CreateCommentEntitiy');
const CommentRepository = require('../../domains/repositories/commentRepository');

class CreateCommentUseCase {
  constructor() {
    this.commentRepository = new CommentRepository();
  }

  async execute(useCaseBody, useCaseParam) {
    const comment = new CreateCommentEntitiy({ ...useCaseBody, ...useCaseParam });
    const createdcomment = await this.commentRepository.add(comment);
    return createdcomment;
  }
}

module.exports = new CreateCommentUseCase();
