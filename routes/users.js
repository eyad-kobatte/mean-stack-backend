const express = require('express');

const operations = require('../lib/operations');

const router = express.Router();

router.post('/', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const user = operations.validateEmailAndPassword(email, password);
  if (user) {
    const jwt = operations.createJWT(user);
    res.json({ token: jwt });
  } else {
    res.status(400).json({ message: 'Invalid email or password' });
  }
});

module.exports = router;
