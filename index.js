require('dotenv').config();
const express = require('express');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();
app.use(express.json());

app.use('/', indexRouter);
app.use('/users', usersRouter);

// Heroku listens on environment variable PORT automatically. They set this up internally
app.listen(process.env.PORT);
