const express = require('express');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  const data = { name: 'Eyad' };
  data.message = 'Hello ' + data.name;
  res.json(data);
});

app.listen(3000);
