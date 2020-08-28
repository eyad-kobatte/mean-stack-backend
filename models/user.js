const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
  firstName: String,
  lastName: String,
  age: Number,
  hobbies: [String],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
