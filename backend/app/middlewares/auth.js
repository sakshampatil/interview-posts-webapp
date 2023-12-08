const jwt = require("jsonwebtoken");
const error = require("../utils/errorHandler");

module.exports.verifyToken = function (req, res, next) {
  //get the token from header if present
  token = req.headers.authorization;

  //if not token found return response without going to next middleware
  if (!token) {
    throw new error.Unauthorized("Unauthorized");
  }

  try {
    if (token.includes("Bearer")) {
      token = token.substr(7);
    }

    //if can verify the token set req.user and pass to next middleware
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    throw new error.Unauthorized(err);
  }
};
