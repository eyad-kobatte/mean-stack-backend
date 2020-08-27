const jwt = require('jsonwebtoken');

function validateEmailAndPassword(email, password) {
  return {
    email: email,
    firstName: '',
    lastName: '',
    age: 24,
    hobbies: [''],
  };
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
