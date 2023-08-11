const CreateCommentUseCase = require('../../applications/useCases/createCommentUseCase');
const DetailVideoUseCase = require('../../applications/useCases/detailVideoUseCase');
const GetCommentsUseCase = require('../../applications/useCases/getCommentsUseCase');
const GetProductsUseCase = require('../../applications/useCases/getProductsUseCase');
const GetVideosUseCase = require('../../applications/useCases/getVideosUseCase');
const Comment = require('../../domains/models/commentModel');
const Product = require('../../domains/models/productModel');
const Video = require('../../domains/models/videoModel');
const CommentRepository = require('../../domains/repositories/commentRepository');
const ProductRepository = require('../../domains/repositories/productRepository');
const VideoRepository = require('../../domains/repositories/videoRepository');

const serviceInstanceContainer = {
  videoRepository: new VideoRepository(Video),
  productRepository: new ProductRepository(Product),
  commentRepository: new CommentRepository(Comment),
};

const useCaseInstanceContainer = {
  getVideosUseCase: new GetVideosUseCase(serviceInstanceContainer.videoRepository),
  detailVideoUseCase: new DetailVideoUseCase(serviceInstanceContainer.videoRepository),
  getProductsUseCase: new GetProductsUseCase(serviceInstanceContainer.productRepository),
  getCommentsUseCase: new GetCommentsUseCase(serviceInstanceContainer.commentRepository),
  createCommentUseCase: new CreateCommentUseCase(serviceInstanceContainer.commentRepository),
};

module.exports = {
  ...serviceInstanceContainer,
  ...useCaseInstanceContainer,
};
