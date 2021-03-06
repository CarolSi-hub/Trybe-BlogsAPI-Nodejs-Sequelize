const { StatusCodes } = require('http-status-codes');

const errorMiddleware = (err, req, res, _next) => {
 if (err.isError) {
   return res.status(err.status).json({ message: err.message });
 }
 return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
  error: 'Deu ruim...',
 });
};

module.exports = errorMiddleware;