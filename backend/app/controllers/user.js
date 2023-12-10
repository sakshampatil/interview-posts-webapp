const userModel = require("../models/user");
const jwt = require("jsonwebtoken");
const { responseHandler } = require("../utils/responseHandler");
const errorHandler = require("../utils/errorHandler");
const bcrypt = require("bcrypt");

exports.signup = async (req, res, next) => {
  try {
    let body = req.body;
    //checking the incoming data
    if (!body.username) {
      throw new errorHandler.BadRequest("Username is required");
    }
    if (!body.password || body.password.length < 8) {
      throw new errorHandler.BadRequest("Password is required");
    }

    //checking if user already exists
    const existingUser = await userModel.findOne({
      username: body.username,
    });
    if (existingUser) {
      throw new errorHandler.BadRequest("User already exists");
    }

    //hashing password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(body.password, salt);
    body.password = hashedPassword;

    //creating user
    const user = await userModel.create(body);

    responseHandler({ username: user.username, userId: user._id }, res);
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    let body = req.body;
    //checking the incoming data
    if (!body.username) {
      throw new errorHandler.BadRequest("Username is required");
    }
    if (!body.password || body.password.length < 8) {
      throw new errorHandler.BadRequest("Password is required");
    }

    //checking if user exist
    const user = await userModel.findOne({ username: body.username });
    if (!user) {
      throw new errorHandler.Unauthorized("User does not exist");
    }

    //comparing the password
    const result = await bcrypt.compare(body.password, user.password);
    if (!result) {
      throw new errorHandler.Unauthorized("Incorrect password");
    }

    //generating a token
    const token = await jwt.sign(
      {
        _id: user._id,
        username: user.username,
      },
      process.env.SECRET_KEY
    );

    responseHandler(
      {
        token: token,
        username: user.username,
      },
      res,
      "Login Succesfull"
    );
  } catch (error) {
    next(error);
  }
};
