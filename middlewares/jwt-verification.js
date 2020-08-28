const jwt = require('jsonwebtoken');

function verifyJWT(req, res, next) {
  if (!req.headers.authorization) {
    return next(new Error('No JWT Found'));
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
