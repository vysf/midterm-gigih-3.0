/* eslint-disable new-cap */
const Comment = require('../entities/CommentEntitiy');

class CommentRepository {
  constructor(database) {
    this.database = database;
  }

  async findByVideoId(videoId) {
    try {
      const comments = await this.database.find({ videoId }).sort('-createdAt');
      return comments.map(({ _doc: comment }) => new Comment(comment));
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
