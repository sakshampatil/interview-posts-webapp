const mongoose = require("mongoose");

const commentsSchema = new mongoose.Schema({
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "posts",
    required: true,
  },
  commentorName: {
    type: mongoose.Schema.Types.String,
    ref: "users",
    required: true,
  },
  commentText: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("comments", commentsSchema);
