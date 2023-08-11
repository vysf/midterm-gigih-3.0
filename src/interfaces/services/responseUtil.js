const sendResponse = (res, code, status, message, data) => {
  const response = {
    status,
    message,
    ...data,
  };

  res.status(code).json(response);
};

module.exports = sendResponse;
