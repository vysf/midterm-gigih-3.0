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

      const response = {
        status: 'succes',
        comments,
        currentPage,
        totalPage,
        limit,
      };

      res.status(200).json(response);
    } catch (error) {
      const response = {
        status: 'fail',
        message: error.message,
      };
      res.status(400).json(response);
    }
  }

  async postCommentOnVideo(req, res) {
    const { createCommentUseCase } = this.injection;
    try {
      await createCommentUseCase.execute(req.body, req.params);

      const response = {
        status: 'succes',
      };

      res.status(201).json(response);
    } catch (error) {
      const response = {
        status: 'fail',
        message: error.message,
      };
      res.status(400).json(response);
    }
  }
}

module.exports = CommentController;
