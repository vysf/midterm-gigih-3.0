const express = require('express');

function usersRouter(handler) {
  const router = express.Router();

  router.post('/users', handler.postUser);

  return router;
}

module.exports = usersRouter;
