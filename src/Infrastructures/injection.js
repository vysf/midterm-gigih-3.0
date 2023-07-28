// external agency
const bcrypt = require('bcrypt');
const uuid = require('uuid');

const uuid4 = uuid.v4;

// internal js module

// service
const UsersRepositoryMongo = require('./repository/usersRepositoryMongo');
const VideosRepositoryMongo = require('./repository/videosRepositoryMongo');
const CommentsRepositoryMongo = require('./repository/commentsRepositoryMongo');
const BcryptPasswordHash = require('./security/BcryptPasswordHash');

// use case
const RegisterUserUseCase = require('../Applications/use case/RegisterUserUseCase');
const AddVideoUseCase = require('../Applications/use case/AddVideoUseCase');
const GetListVideosUseCase = require('../Applications/use case/GetListVideosUseCase');
const GetCommentsInVideoUseCase = require('../Applications/use case/GetCommentsInVideoUseCase');
const AddCommentUseCase = require('../Applications/use case/AddCommentUseCase');

const serviceInstanceContainer = {
  usersRepository: UsersRepositoryMongo(uuid4),
  videoRepository: VideosRepositoryMongo(uuid4),
  commentRepository: CommentsRepositoryMongo(uuid4),
  passwordHash: new BcryptPasswordHash(bcrypt),
};

const useCaseInstanceContainer = {
  registerUserUseCase: new RegisterUserUseCase({
    usersRepository: serviceInstanceContainer.usersRepository,
    passwordHash: serviceInstanceContainer.passwordHash,
  }),
  addVideoUseCase: new AddVideoUseCase({
    videoRepository: serviceInstanceContainer.videoRepository,
  }),
  getVideosUseCase: new GetListVideosUseCase({
    videoRepository: serviceInstanceContainer.videoRepository,
  }),
  addCommentUseCase: new AddCommentUseCase({
    commentRepository: serviceInstanceContainer.commentRepository,
  }),
  getCommnetsInVideoUseCase: new GetCommentsInVideoUseCase({
    commentRepository: serviceInstanceContainer.commentRepository,
  }),
};

module.exports = {
  ...serviceInstanceContainer,
  ...useCaseInstanceContainer,
};
