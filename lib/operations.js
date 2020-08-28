const jwt = require('jsonwebtoken');

const User = require('../models/user');

async function validateEmailAndPassword(email, password) {
  const user = await User.findOne({ email }).lean();
  if (user && user.password === password) {
    return user;
  }
  throw new Error('Invalid email or password');
}

function createJWT(payload) {
  const exp = new Date();
  exp.setMinutes(exp.getMinutes() + 1);
  payload.exp = exp.getTime();

  // We use RS256 because our keys are RSA keys. This would change depending on what keys were used
  const token = jwt.sign(payload, process.env.JWT_PRIVATE_KEY, {
    algorithm: 'RS256',
  });
  return token;
}

module.exports = {
  validateEmailAndPassword,
  createJWT,
};
