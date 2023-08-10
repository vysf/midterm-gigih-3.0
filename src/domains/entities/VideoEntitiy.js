/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
class VideoEntitiy {
  constructor(payload) {
    this._verifyPayload(payload);
    const {
      _id: id, title, thumbnails, description,
    } = payload;

    this.id = id;
    this.title = title;
    this.thumbnails = thumbnails;
    this.description = description;
  }

  _verifyPayload({
    _id: id, title, thumbnails, description,
  }) {
    if (!id || !title || !thumbnails || !description) {
      throw new Error('VIDEO.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (typeof id !== 'string' || typeof title !== 'string' || typeof description !== 'string' || typeof thumbnails !== 'object') {
      throw new Error('VIDEO.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }
  }
}

module.exports = VideoEntitiy;
