// routes
const express = require('express');
const path = require('path');
const router = express.Router();

// import home route controller
const home = require('./home');
const error = require('./error');
const portFolio = require('./portFolio');

router.get('/', home.get);
router.get('/portFolio/:id', portFolio.get);
// router.use(error.client);
// router.use(error.server);

module.exports = router;
