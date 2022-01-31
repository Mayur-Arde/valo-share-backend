const errorHandler = (req, res, next) => {
  res.status(500).send({
    status: 'error',
    message: 'Something went wrong',
  });
};

export default errorHandler;
