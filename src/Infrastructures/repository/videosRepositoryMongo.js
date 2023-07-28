/* eslint-disable no-underscore-dangle */
const Video = require('../../Domains/videos/Video');
const VideoModel = require('../database/mongoDB/models/video');

function VideosRepositoryMongo(idGenerator) {
  const add = async (videoEntity) => {
    const id = `video-${idGenerator()}`;
    const video = new VideoModel({ _id: id, ...videoEntity });
    return video.save();
    // video entitie ownerid, thumbnail
  };

  const findById = async (id, ownerId) => {
    try {
      const video = await VideoModel.findById({ _id: id, ownerId });
      return video;
    } catch (error) {
      throw new Error('id tidak ditemukan');
    }
  };

  const findAll = async () => {
    try {
      const videos = await VideoModel.find({}).select('-ownerId');
      return videos.map(({ _doc: video }) => new Video(
        {
          videoId: video._id,
          ...video,
        },
      ));
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const deleteById = async (id, ownerId) => {
    try {
      const video = await VideoModel.findByIdAndDelete({ _id: id, ownerId });
      return video;
    } catch (error) {
      throw new Error('id tidak ditemukan');
    }
  };

  return {
    add,
    findById,
    findAll,
    deleteById,
  };
}

module.exports = VideosRepositoryMongo;
