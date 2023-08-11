const SimpleLogger = require('../../interfaces/services/logger');
const sendResponse = require('../../interfaces/services/responseUtil');

class CommentController {
  constructor(injection) {
    this.injection = injection;
    this.logger = new SimpleLogger(this.constructor.name);
  }

  async getAllCommentsOnVideo(req, res) {
    this.logger.info(`${JSON.stringify(req.params)} - ${JSON.stringify(req.query)}`);
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

      this.logger.info(`Success to get all comments from videoId : ${req.params.id}`);
    } catch (error) {
      sendResponse(res, 400, 'fail', error.message, null);
      this.logger.error(`Fail to get all comments from videoId : ${req.params.id}`);
    }
  }

  async postCommentOnVideo(req, res) {
    this.logger.info(`${JSON.stringify(req.params)} - ${JSON.stringify(req.body)}`);
    const { createCommentUseCase } = this.injection;
    try {
      await createCommentUseCase.execute(req.body, req.params);
      sendResponse(res, 201, 'success', 'comment added successfully', null);

      this.logger.info(`Success to add a comment to videoId : ${req.params.id}`);
    } catch (error) {
      sendResponse(res, 400, 'fail', error.message, null);
      this.logger.Error(`Fail to add a comment to videoId : ${req.params.id}`);
    }
  }
}

module.exports = CommentController;
