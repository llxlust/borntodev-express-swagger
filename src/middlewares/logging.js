const express = require("express");
const app = express();
const errorHandler = (error, req, res, next) => {
  let message = error.message;
  let statusCode, errorMessage;
  if (message === "42S02") {
    statusCode = 404;
    errorMessage = "Base table or view not found";
  }
  const a = Date.now().toUTC
  res
    .status(statusCode || 500)
    .json({
      message: errorMessage || "Server Error",
      statuscode: statusCode || 500,
      timestamp: Date.now(),
    });
};
module.exports = errorHandler;
