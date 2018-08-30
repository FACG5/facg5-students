// routes
const express = require('express');
const path = require('path');
const router = express.Router();

// import home route controller
const home = require('./home');
const error = require('./error');

const portFolio = require('./portFolio');




const add = require('./add');

// add home route
router.get('/', home.get);
router.get('/portFolio/:id', portFolio.get);
router.get('/add', add.get);
router.post('/add',add.post);
router.use(error.client);
router.use(error.server);


module.exports = router;
