const express = require('express');

const routes = express.Router();

const emailController = require('../controllers/emailController');

routes.post('/add-email', emailController.AddEmail)
routes.post('/verifyEmail', emailController.sendEmail)

module.exports = routes;
