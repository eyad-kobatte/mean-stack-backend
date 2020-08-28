const express = require('express');

const operations = require('../lib/operations');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const user = await operations.saveUser(req.body);
    res.json(user);
  } catch (error) {
    console.error('Failed to create new user', error.message);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
