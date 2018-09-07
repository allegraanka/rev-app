const express = require('express');
const router = express.Router();
const ctrlUsers = require('../controllers/users.controllers.js');

router
  .route('/users')
  .get(ctrlUsers.usersGetAll);

router
  .route('/users/:userId')
  .get(ctrlUsers.usersGetOne);

router
  .route('/users/new')
  .get(ctrlUsers.usersAddOne);

module.exports = router;
