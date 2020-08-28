const express = require('express');

const operations = require('../lib/operations');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const users = await operations.getAllUsers();
    res.status(200).json(users);
    return next;
  } catch (error) {
    console.error('Failed to get all users', error.message);
    return next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const user = await operations.saveUser(req.body);
    res.status(200).json(user);
    return next;
  } catch (error) {
    console.error('Failed to create new user', error.message);
    return next(error);
  }
});

router.put('/:email', async (req, res, next) => {
  try {
    const user = await operations.editUser(req.params.email, req.body);
    res.status(200).json(user);
    return next;
  } catch (error) {
    console.error('Failed to edit a user', error.message);
    return next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const user = await operations.deleteUser(req.params.id);
    res.status(200).json(user);
    return next;
  } catch (error) {
    console.error('Failed to delete a user', error.message);
    return next(error);
  }
});

module.exports = router;
