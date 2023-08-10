const mongoose = require('mongoose');

const commnetSchema = new mongoose.Schema({
  name: String,
  body: String,
  videoId: String,
  imageUrl: String,
}, {
  timestamps: {
    updatedAt: false,
  },
});

const Comment = mongoose.model('Comment', commnetSchema);

module.exports = Comment;
