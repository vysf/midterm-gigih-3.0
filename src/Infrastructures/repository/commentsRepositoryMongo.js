/* eslint-disable no-underscore-dangle */
const Comment = require('../../Domains/comments/Comment');
const CommentModel = require('../database/mongoDB/models/comment');

function CommentsRepositoryMongo(idGenerator) {
  const add = async (commentEntity) => {
    const id = `comment-${idGenerator()}`;
    const comment = new CommentModel({ _id: id, ...commentEntity });
    return comment.save();
    // video entitie ownerid, thumbnail
  };

  const findCommentsInVideo = async (videoId) => {
    try {
      const comments = await CommentModel.find({ videoId }).select('-videoId');
      return comments.map(({ _doc: comment }) => new Comment(
        {
          ...comment,
        },
      ));
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return {
    add,
    findCommentsInVideo,
  };
}

module.exports = CommentsRepositoryMongo;
