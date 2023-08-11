/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
class CommentEntitiy {
  constructor(payload) {
    this._verifyPayload(payload);
    const {
      _id: id, name, body, videoId, imageUrl, createdAt,
    } = payload;

    this.id = id;
    this.name = name;
    this.body = body;
    this.videoId = videoId;
    this.imageUrl = imageUrl;
    this.createdAt = createdAt;
  }

  _verifyPayload({
    _id: id, name, body, videoId, imageUrl, createdAt,
  }) {
    if (!id || !name || !body || !videoId || !imageUrl || !createdAt) {
      throw new Error('COMMENT.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (
      typeof id !== 'object'
      || typeof name !== 'string'
      || typeof body !== 'string'
      || typeof videoId !== 'string'
      || typeof imageUrl !== 'string'
      || typeof createdAt !== 'object'
    ) {
      throw new Error('COMMENT.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }
  }
}

module.exports = CommentEntitiy;
