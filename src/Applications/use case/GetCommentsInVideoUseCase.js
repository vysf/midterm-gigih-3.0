/* eslint-disable no-underscore-dangle */

class AddVideoUseCase {
  constructor({ commentRepository }) {
    this._videoRepository = commentRepository;
  }

  async execute(useCasePayload) {
    return this._videoRepository.findCommentsInVideo(useCasePayload.videoId);
  }
}

module.exports = AddVideoUseCase;
