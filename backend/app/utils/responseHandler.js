module.exports.responseHandler = (data, res, message, status) => {
  let statusCode = status || 200;
  let messageData = message || "success";

  res.status(statusCode).json({
    status: "success",
    message: messageData,
    data: data,
  });
};
