const express = require('express');
const GetCommentsUseCase = require('../../applications/useCases/getCommentsUseCase');
const CreateCommentUseCase = require('../../applications/useCases/createCommentUseCase');

const router = express.Router();

router.get('/comments/:id', async (req, res) => {
  try {
    const {
      comments,
      currentPage,
      totalPage,
      limit,
    } = await GetCommentsUseCase.execute(req.params, req.query);

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
});

router.post('/comments/:id', async (req, res) => {
  try {
    await CreateCommentUseCase.execute(req.body, req.params);

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
});

module.exports = router;
