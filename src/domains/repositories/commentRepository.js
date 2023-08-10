/* eslint-disable class-methods-use-this */
const { paginate } = require('../../interfaces/services/paginationService');
const Comment = require('../models/commentModel');
const CommentModel = require('../models/commentModel');

class CommentRepository {
  async findByVideoId(videoId, pageNumber, pageSize) {
    try {
      const { pageNumber: currentPage, pageSize: limit, skip } = paginate(pageNumber, pageSize);
      const totalComment = await CommentModel.countDocuments();
      const totalPages = Math.ceil(totalComment / limit);
      const comments = await CommentModel.find({ videoId }).skip(skip).limit(limit);

      return {
        comments: comments.map(({ _doc: comment }) => new Comment(comment)),
        totalPage: totalPages,
        currentPage,
        limit,
      };
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async add(commentObject) {
    const { videoId, name, body } = commentObject;
    const imageUrl = `https://ui-avatars.com/api/?background=random&name=${name.replace(/ /g, '+')}&size=128`;
    const comment = new CommentModel({
      videoId, name, body, imageUrl,
    });
    return comment.save();
  }
}

module.exports = CommentRepository;
