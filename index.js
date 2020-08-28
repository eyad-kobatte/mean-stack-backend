require('dotenv').config();
const express = require('express');

const indexRouter = require('./routes/index');
const loginRouter = require('./routes/login');

const app = express();
app.use(express.json());

app.use('/', indexRouter);
app.use('/login', loginRouter);

// Heroku listens on environment variable PORT automatically. They set this up internally
app.listen(process.env.PORT);
