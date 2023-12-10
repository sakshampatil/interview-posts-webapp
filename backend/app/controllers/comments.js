const commentsModel = require("../models/comments");
const postsModel = require("../models/posts");
const userModel = require("../models/user");
const { responseHandler } = require("../utils/responseHandler");
const errorHandler = require("../utils/errorHandler");

exports.createComment = async (req, res, next) => {
  try {
    let body = req.body;

    console.log("Com = ", req.body);
    if (!body.postId || !body.commentorName || !body.commentText) {
      throw new errorHandler.BadRequest("Insufficient Data");
    }

    const post = await postsModel.findOne({ _id: body.postId });
    const user = await userModel.findOne({ username: body.commentorName });
    console.log("post = ", post);
    console.log("user = ", user);
    if (!post || !user) {
      throw new errorHandler.BadRequest("Invalid data");
    }

    const comment = await commentsModel.create(body);

    responseHandler(comment, res);
  } catch (error) {
    next(error);
  }
};

exports.listComments = async (req, res, next) => {
  try {
    let params = req.query;
    let filter = {};
    if (params.search) {
      filter = {
        commentText: { $regex: params.search, $options: "i" },
      };
    }

    const commentsList = await commentsModel.find(filter);

    responseHandler(commentsList, res);
  } catch (error) {
    next(error);
  }
};

exports.getAllCommentsForPost = async (req, res, next) => {
  try {
    let postId = req.params.id;

    if (!postId) {
      throw new errorHandler.BadRequest();
    }

    const comments = await commentsModel.find({ postId: postId });

    responseHandler(comments, res);
  } catch (error) {}
};
