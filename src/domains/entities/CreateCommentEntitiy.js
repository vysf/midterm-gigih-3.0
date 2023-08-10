/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
class CreateCommentEntitiy {
  constructor(payload) {
    this._verifyPayload(payload);
    const { name, body, id: videoId } = payload;

    this.name = name;
    this.body = body;
    this.videoId = videoId;
  }

  _verifyPayload({
    name, body, id: videoId,
  }) {
    if (!name || !body || !videoId) {
      throw new Error('CREATE_COMMENT.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (typeof name !== 'string'
      || typeof body !== 'string'
      || typeof videoId !== 'string'
    ) {
      throw new Error('CREATE_COMMENT.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }
  }
}

module.exports = CreateCommentEntitiy;
