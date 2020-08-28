require('dotenv').config();
const express = require('express');

const app = express();
app.use(express.json());

function validateEmailAndPassword(email, password) {
  return {
    email: email,
    password: password,
  };
}

app.get('/', (req, res) => {
  const data = { name: 'Eyad' };
  data.message = 'Hello ' + data.name;
  res.json(data);
});

app.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const user = validateEmailAndPassword(email, password);
  if (user) {
    res.json(user);
  } else {
    res.status(400).json({ message: 'Invalid email or password' });
  }
});

// Heroku listens on environment variable PORT automatically. They set this up internally
app.listen(process.env.PORT);
