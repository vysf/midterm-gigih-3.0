const express = require('express');
const GetVideosUseCase = require('../../applications/useCases/getVideosUseCase');
const DetailVideoUseCase = require('../../applications/useCases/detailVideoUseCase');

const router = express.Router();

router.get('/videos', async (req, res) => {
  try {
    const {
      videos,
      currentPage,
      totalPage,
      limit,
    } = await GetVideosUseCase.execute(req.query);

    const response = {
      status: 'succes',
      videos,
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

router.get('/videos/:id', async (req, res) => {
  try {
    const video = await DetailVideoUseCase.execute(req.params);

    const response = {
      status: 'succes',
      video,
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

module.exports = router;
