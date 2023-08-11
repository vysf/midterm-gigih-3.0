const sendResponse = require('../../interfaces/services/responseUtil');

class CommentController {
  constructor(injection) {
    this.injection = injection;
  }

  async getAllCommentsOnVideo(req, res) {
    const { getCommentsUseCase } = this.injection;
    try {
      const {
        comments,
        currentPage,
        totalPage,
        limit,
      } = await getCommentsUseCase.execute(req.params, req.query);

      sendResponse(res, 200, 'success', null, {
        comments,
        currentPage,
        totalPage,
        limit,
      });
    } catch (error) {
      sendResponse(res, 400, 'fail', error.message, null);
    }
  }

  async postCommentOnVideo(req, res) {
    const { createCommentUseCase } = this.injection;
    try {
      await createCommentUseCase.execute(req.body, req.params);
      sendResponse(res, 201, 'success', 'comment added successfully', null);
    } catch (error) {
      sendResponse(res, 400, 'fail', error.message, null);
    }
  }
}

module.exports = CommentController;
