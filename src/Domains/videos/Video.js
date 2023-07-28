/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
class Video {
  constructor(payload) {
    this._verifyPayload(payload);

    const { thumbnail, videoId } = payload;

    this.thumbnail = thumbnail;
    this.videoId = videoId;
  }

  _verifyPayload({ thumbnail, videoId }) {
    if (!thumbnail || !videoId) {
      throw new Error('GET_VIDEOS.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (typeof thumbnail !== 'string' || typeof videoId !== 'string') {
      throw new Error('GET_VIDEOS.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }
  }
}

module.exports = Video;
