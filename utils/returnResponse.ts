const returnResponse = (status, message, data, res) => {
  return res.json({
    status,
    message,
    data,
  });
};
export default returnResponse;
