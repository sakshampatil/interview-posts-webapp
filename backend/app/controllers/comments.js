const commentsModel = require("../models/comments");
const postsModel = require("../models/posts");
const { responseHandler } = require("../utils/responseHandler");
const errorHandler = require("../utils/errorHandler");

exports.createComment = async (req, res, next) => {
  try {
    let body = req.body;

    if (!body.postId || !body.commentorId || !body.commentText) {
      throw new errorHandler.BadRequest("Insufficient Data");
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
