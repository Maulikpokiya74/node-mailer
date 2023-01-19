const express = require('express');

const routes = express.Router();

routes.use('/email', require('./email'));

module.exports = routes;
