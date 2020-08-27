require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

function validateUsernameAndPassword(username, password) {
  return {
    username: username,
    password: password,
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

app.get('/', (req, res) => {
  const data = { name: 'Eyad' };
  data.message = 'Hello ' + data.name;
  res.json(data);
});

app.post('/', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const user = validateUsernameAndPassword(username, password);
  if (user) {
    const jwt = createJWT(user);
    res.json({ token: jwt });
  } else {
    res.status(400).json({ message: 'Invalid username or password' });
  }
});

// Heroku listens on environment variable PORT automatically. They set this up internally
app.listen(process.env.PORT);
