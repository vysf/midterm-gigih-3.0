const mongoose = require('mongoose');

const { Schema } = mongoose;
const CommentSchema = new Schema(
  {
    _id: {
      type: String,
      unique: true,
      required: true,
    },
    username: {
      type: String,
      unique: true,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    videoId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const CommentModel = mongoose.model('Comments', CommentSchema);

module.exports = CommentModel;
