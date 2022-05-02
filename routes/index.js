const { Router } = require('express');
const routes = require('express').Router();
const express = require('express')
const router = express.Router();

routes.use('/contacts', require('./contacts'))

module.exports = routes;