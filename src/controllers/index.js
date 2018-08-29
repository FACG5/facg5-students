// routes
const express = require('express');
const controller = express.Router();
const home = require('./home');
const error = require('./error')
controller.get('/',home.get);
controller.use(error.clients)
controller.use(error.server)

module.exports=controller