const errorHandlerMidlleware = (err, req, res, next) => {
  res.status(500).json({
    message: "there was an error",
  });
};

export default errorHandlerMidlleware;
