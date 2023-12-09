const express = require("express");
const cookieParser = require("cookie-parser");
const { useErrorHandler } = require("../utils/errorHandler");

const user = require("./user");
const posts = require("./posts");
const comments = require("./comments");

module.exports.default = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());

  app.use("/api/v1/user", user);
  app.use("/api/v1/posts", posts);
  app.use("/api/v1/comments", comments);

  app.use(useErrorHandler);
};
