const SimpleLogger = require('../../interfaces/services/logger');
const sendResponse = require('../../interfaces/services/responseUtil');

class CommentController {
  constructor(injection) {
    this.injection = injection;
    this.logger = new SimpleLogger(this.constructor.name);
  }

  async getAllCommentsOnVideo(req, res, next) {
    try {
      const { getCommentsUseCase } = this.injection;
      const comments = await getCommentsUseCase.execute(req.params);

      this.logger.info(`Success to get all comments from videoId : ${req.params.id}`);
      sendResponse(res, 200, 'success', null, {
        comments,
      });
    } catch (error) {
      this.logger.error(`Fail to get all comments from videoId : ${req.params.id}`);
      sendResponse(res, 400, 'fail', error.message, null);
      next(error);
    }
  }

  async postCommentOnVideo(req, res, next) {
    try {
      const { createCommentUseCase } = this.injection;
      await createCommentUseCase.execute(req.body, req.params);

      this.logger.info(`Success to add a comment to videoId : ${req.params.id}`);
      sendResponse(res, 201, 'success', 'comment added successfully', null);
    } catch (error) {
      this.logger.Error(`Fail to add a comment to videoId : ${req.params.id}`);
      sendResponse(res, 400, 'fail', error.message, null);
      next(error);
    }
  }
}

module.exports = CommentController;
