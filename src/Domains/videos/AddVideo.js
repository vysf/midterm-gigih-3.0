/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
class AddVideo {
  constructor(payload) {
    this._verifyPayload(payload);

    const { thumbnail, ownerId } = payload;

    this.thumbnail = thumbnail;
    this.ownerId = ownerId;
  }

  _verifyPayload({ thumbnail, ownerId }) {
    if (!thumbnail || !ownerId) {
      throw new Error('ADD_VIDEO.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (typeof thumbnail !== 'string' || typeof ownerId !== 'string') {
      throw new Error('ADD_VIDEO.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }
  }
}

module.exports = AddVideo;
