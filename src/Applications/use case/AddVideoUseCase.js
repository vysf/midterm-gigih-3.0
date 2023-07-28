/* eslint-disable no-underscore-dangle */
const AddVideo = require('../../Domains/videos/AddVideo');

class AddVideoUseCase {
  constructor({ videoRepository }) {
    this._videoRepository = videoRepository;
  }

  async execute(useCasePayload) {
    const addVideo = new AddVideo(useCasePayload);
    return this._videoRepository.add(addVideo);
  }
}

module.exports = AddVideoUseCase;
