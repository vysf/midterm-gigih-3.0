const express = require('express');
const createUserUseCase = require('../../applications/useCases/createUserUseCase');

const router = express.Router();

// POST /users
router.post('/', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Call the use case to create a user
    const user = await createUserUseCase.execute({ name, email, password });

    res.status(201).json(user);
  } catch (error) {
    // console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
});

module.exports = router;
