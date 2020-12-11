const express = require('express');
const routes = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserController = require('../controllers/users');
const checkAuth = require('../middleware/check-auth');


routes.post('/signup', UserController.user_signup);

routes.post('/login', UserController.user_login)

routes.delete('/:userId', checkAuth, UserController.user_delete);

module.exports = routes;
