const mongoose = require('mongoose');

const thumbnailSchema = new mongoose.Schema({
  default: {
    url: String,
    width: Number,
    height: Number,
  },
  medium: {
    url: String,
    width: Number,
    height: Number,
  },
  high: {
    url: String,
    width: Number,
    height: Number,
  },
  standard: {
    url: String,
    width: Number,
    height: Number,
  },
  maxres: {
    url: String,
    width: Number,
    height: Number,
  },
});

const videoSchema = new mongoose.Schema({
  _id: String,
  title: String,
  description: String,
  thumbnails: thumbnailSchema,
});

const Video = mongoose.model('Video', videoSchema);

module.exports = Video;
