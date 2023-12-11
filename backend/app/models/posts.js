const mongoose = require("mongoose");

const postsSchema = new mongoose.Schema({
  authorName: {
    type: mongoose.Schema.Types.String,
    ref: "users",
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("posts", postsSchema);
