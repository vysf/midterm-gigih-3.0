const mongoose = require('mongoose');

const { Schema } = mongoose;
const VideoSchema = new Schema(
  {
    _id: {
      type: String,
      unique: true,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    ownerId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const VideoModel = mongoose.model('Videos', VideoSchema);

module.exports = VideoModel;
