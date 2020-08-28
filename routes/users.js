const express = require('express');

const operations = require('../lib/operations');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const user = await operations.saveUser(req.body);
    res.json(user);
    return next;
  } catch (error) {
    console.error('Failed to create new user', error.message);
    return next(error);
  }
});

module.exports = router;
