const { Router } = require('express');
const routes = require('express').Router();
const router = express.Router();

routes.use('/contacts', require('./contacts'))

module.exports = routes;