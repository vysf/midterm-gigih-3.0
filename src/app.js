/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
require('dotenv').config();
const mongoose = require('mongoose');
const config = require('../config/config');
const server = require('./Infrastructures/http/server');
const injection = require('./Infrastructures/injection');
const UsersHandler = require('./Interfaces/api/users/UsersHandler');
const usersRouter = require('./Interfaces/api/users/usersRouter');

const mongoDBConnection = require('./Infrastructures/database/mongoDB/connection');
const videosRouter = require('./Interfaces/api/videos/videosRouter');
const VideosHandler = require('./Interfaces/api/videos/VideosHandler');
const commentsRouter = require('./Interfaces/api/Comments/commentsRouter');
const CommentsHandler = require('./Interfaces/api/Comments/CommentsHandler');

(() => {
  mongoDBConnection(mongoose, config, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }).connectToMongo();
  // add router
  // usersRouter(new UsersHandler(injection))
  const usersMiddleware = usersRouter(new UsersHandler(injection));
  const videosMiddleware = videosRouter(new VideosHandler(injection));
  const CommentsMiddleware = commentsRouter(new CommentsHandler(injection));

  server.use('/', usersMiddleware);
  server.use('/', videosMiddleware);
  server.use('/', CommentsMiddleware);

  server.listen(config.port, () => {
    console.log(`🚀 Server run on http://${config.host}:${config.port}`);
  });
})();
