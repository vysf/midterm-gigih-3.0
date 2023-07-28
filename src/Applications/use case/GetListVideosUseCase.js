/* eslint-disable no-underscore-dangle */

class AddVideoUseCase {
  constructor({ videoRepository }) {
    this._videoRepository = videoRepository;
  }

  async execute() {
    return this._videoRepository.findAll();
  }
}

module.exports = AddVideoUseCase;
