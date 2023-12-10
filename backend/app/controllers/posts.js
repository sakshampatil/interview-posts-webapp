const postsModel = require("../models/posts");
const { responseHandler } = require("../utils/responseHandler");
const errorHandler = require("../utils/errorHandler");

exports.createPost = async (req, res, next) => {
  try {
    let body = req.body;

    //checking the incoming data
    if (!body.content || !body.authorName) {
      throw new errorHandler.BadRequest("Insufficient Data");
    }

    //creating post
    const post = await postsModel.create(body);

    responseHandler(post, res);
  } catch (error) {
    next(error);
  }
};

exports.listPosts = async (req, res, next) => {
  try {
    let params = req.query;
    let filter = {};
    if (params.search) {
      filter = {
        content: { $regex: params.search, $options: "i" },
      };
    }

    const postsList = await postsModel.find(filter);

    responseHandler(postsList, res);
  } catch (error) {
    next(error);
  }
};

exports.getPostById = async (req, res, next) => {
  try {
    let postId = req.params.id;
    console.log("POstid = ", postId);
    let filter = {
      _id: postId,
    };

    const post = await postsModel.findById(filter);

    if (!post) {
      throw new errorHandler.NotFound("Post Not Found");
    }

    responseHandler(post, res);
  } catch (error) {
    next(error);
  }
};
