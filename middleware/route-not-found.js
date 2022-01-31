const routeNotFound = (req, res, next) => {
  res.status(404).send({
    status: 'error',
    message: 'Route not found :(',
  });
};

export default routeNotFound;
