/* eslint-disable no-underscore-dangle */
class CommentsHandler {
  constructor(injection) {
    this._container = injection;

    this.postComment = this.postComment.bind(this);
    this.getCommentsInVideo = this.getCommentsInVideo.bind(this);
  }

  async postComment(req, res) {
    const { addCommentUseCase } = this._container;
    try {
      await addCommentUseCase.execute(req.body);

      const response = {
        status: 'success',
      };

      res.status(200).send(response);
    } catch (error) {
      const response = {
        status: 'fail',
        message: error.message,
      };

      res.status(400).send(response);
    }
  }

  async getCommentsInVideo(req, res) {
    const { getCommnetsInVideoUseCase } = this._container;
    try {
      const comments = await getCommnetsInVideoUseCase.execute(req.body);

      const response = {
        status: 'success',
        data: {
          comments,
        },
      };

      res.status(200).send(response);
    } catch (error) {
      const response = {
        status: 'fail',
        message: error.message,
      };

      res.status(400).send(response);
    }
  }
}

module.exports = CommentsHandler;
