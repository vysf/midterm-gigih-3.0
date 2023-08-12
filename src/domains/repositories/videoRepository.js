/* eslint-disable no-underscore-dangle */
const Video = require('../entities/VideoEntitiy');

class VideoRepository {
  constructor(database) {
    this.database = database;
  }

  async findAll() {
    try {
      const videos = await this.database.find({});
      return videos.map(({ _doc: video }) => new Video(video));
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async findById(id) {
    try {
      const video = await this.database.findById({ _id: id });
      return new Video(video);
    } catch (error) {
      throw new Error('Video tidak ditemukan');
    }
  }
}

module.exports = VideoRepository;
