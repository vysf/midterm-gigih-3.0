/* eslint-disable no-underscore-dangle */

class AddCommentUseCase {
  constructor({ commentRepository }) {
    this._commentRepository = commentRepository;
  }

  async execute(useCasePayload) {
    return this._commentRepository.add(useCasePayload);
  }
}

module.exports = AddCommentUseCase;
