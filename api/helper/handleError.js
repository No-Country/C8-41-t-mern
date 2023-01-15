const httpError = (res, e) => {
  res.status(500).json({ error: e });
};

export { httpError };