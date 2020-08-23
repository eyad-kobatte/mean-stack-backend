const express = require('express');

const app = express();
app.use(express.json());

function validateUsernameAndPassword(username, password) {
  return {
    username: username,
    password: password,
  };
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
    res.json(user);
  } else {
    res.status(400).json({ message: 'Invalid username or password' });
  }
});

// Heroku listens on environment variable PORT automatically. They set this up internally
app.listen(process.env.PORT || 3000);
