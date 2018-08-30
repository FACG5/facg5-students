// routes
const express = require('express');
const path = require('path');
const router = express.Router();
const {checkAuthentication} = require('./middleware')
// import home route controller
const home = require('./home');
const error = require('./error');
const addProject = require('./addProject')
const login = require('./login')
// add home route
router.get('/login', login.get);
router.post('/login',login.post)
router.use(checkAuthentication)
router.get('/', home.get);
router.get('/addProject',addProject.get);
router.post('/addProject',addProject.post)
router.use(error.client);
router.use(error.server);

module.exports = router;
