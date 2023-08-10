/* eslint-disable class-methods-use-this */
const { paginate } = require('../../interfaces/services/paginationService');
const Video = require('../entities/VideoEntitiy');
const VideoModel = require('../models/videoModel');

class VideoRepository {
  async findAll(pageNumber = 1, pageSize = 10) {
    try {
      const { pageNumber: currentPage, pageSize: limit, skip } = paginate(pageNumber, pageSize);
      const totalVideo = await VideoModel.countDocuments();
      const totalPages = Math.ceil(totalVideo / limit);
      const videos = await VideoModel.find({}).skip(skip).limit(limit);

      return {
        videos: videos.map(({ _doc: video }) => new Video(video)),
        totalPage: totalPages,
        currentPage,
        limit,
      };
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async findById(id) {
    try {
      const video = await VideoModel.findById({ _id: id });
      return new Video(video);
    } catch (error) {
      throw new Error('Video tidak ditemukan');
    }
  }
}

module.exports = VideoRepository;
