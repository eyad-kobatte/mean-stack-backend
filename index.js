const express = require('express');

const app = express();

app.get('/', (req, res) => {
  const data = { name: 'Eyad' };
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(data));
});

app.listen(3000);
