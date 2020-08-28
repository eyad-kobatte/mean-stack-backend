require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const indexRouter = require('./routes/index');
const loginRouter = require('./routes/login');

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    poolSize: 10,
  })
  .then(() => {
    console.log('Connected to database');
    // Heroku listens on environment variable PORT automatically. They set this up internally
    app.listen(process.env.PORT);
  })
  .catch((error) => {
    console.error('Could not connect to database', error.message);
  });

const app = express();
app.use(express.json());

app.use('/', indexRouter);
app.use('/login', loginRouter);
