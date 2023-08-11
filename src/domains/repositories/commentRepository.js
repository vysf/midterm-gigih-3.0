/* eslint-disable new-cap */
/* eslint-disable class-methods-use-this */
const { paginate } = require('../../interfaces/services/paginationService');
const Comment = require('../entities/CommentEntitiy');

class CommentRepository {
  constructor(database) {
    this.database = database;
  }

  async findByVideoId(videoId, pageNumber, pageSize) {
    try {
      const { pageNumber: currentPage, pageSize: limit, skip } = paginate(pageNumber, pageSize);
      const totalComment = await this.database.countDocuments();
      const totalPages = Math.ceil(totalComment / limit);
      const comments = await this.database.find({ videoId }).skip(skip).limit(limit);

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
    const comment = new this.database({
      videoId, name, body, imageUrl,
    });
    return comment.save();
  }
}

module.exports = CommentRepository;
