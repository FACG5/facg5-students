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
const logout = require('./logout')
const portFolio = require('./portFolio');


// add home route
router.get('/login', login.get);
router.post('/login',login.post)
router.get('/portFolio/:id', portFolio.get);
router.get('/', home.get);
router.use(checkAuthentication)
router.get('/logout',logout.get)
router.get('/addProject',addProject.get);
router.post('/addProject',addProject.post)

router.use(error.server);
// router.use(error.client);

router.use(error.notFound)

module.exports = router;
