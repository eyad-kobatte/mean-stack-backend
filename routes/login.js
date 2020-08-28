const express = require('express');

const operations = require('../lib/operations');

const router = express.Router();

router.post('/', async (req, res, next) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const user = await operations.validateEmailAndPassword(email, password);
    const jwt = operations.createJWT(user);
    res.json({ token: jwt });
    return next;
  } catch (error) {
    console.error('Failed to log user in', error.message);
    return next(error);
  }
});

module.exports = router;
