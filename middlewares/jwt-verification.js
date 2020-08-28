const jwt = require('jsonwebtoken');

const HTTPError = require('../errors/http-error');

function verifyJWT(req, res, next) {
  if (!req.headers.authorization) {
    return next(new HTTPError('No JWT Found', 403));
  }
  try {
    const user = jwt.verify(
      req.headers.authorization,
      process.env.JWT_PUBLIC_KEY
    );
    req.user = user;
    return next();
  } catch (error) {
    return next(error);
  }
}

module.exports = verifyJWT;
