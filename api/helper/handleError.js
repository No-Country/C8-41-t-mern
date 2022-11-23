const httpError = (res = {}, e = {}) => {
  // Sends error to user
  res.status(e.code).json({
    errors: {
      msg: e.message,
    },
  });
};

export { httpError };