/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
class Comments {
  constructor(payload) {
    this._verifyPayload(payload);

    const {
      username, comment, createdAt, updatedAt,
    } = payload;

    this.username = username;
    this.comment = comment;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  _verifyPayload({
    username, comment, createdAt, updatedAt,
  }) {
    if (!username || !comment || !createdAt || !updatedAt) {
      throw new Error('GET_COMMENTS.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (typeof username !== 'string' || typeof username !== 'string' || typeof createdAt !== 'object' || typeof createdAt !== 'object') {
      throw new Error('GET_COMMENTS.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }
  }
}

module.exports = Comments;
