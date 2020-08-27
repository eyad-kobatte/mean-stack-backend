const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  const data = { name: 'Eyad' };
  data.message = 'Hello ' + data.name;
  res.json(data);
});

module.exports = router;
