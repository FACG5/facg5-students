// midllware
const express = require('express');
const path = require('path');

// import 'express-handlebars'
const exphbs = require('express-handlebars');
const bodyParser = require("body-parser");
const controllers = require('./controllers/index');
// import helpers
// const helpers = require('./views/helpers/index');

const app = express();

// set up view engine
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine(
  'hbs',
  exphbs({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
    defaultLayout: 'main'
    // helpers,
  })
);

app.set('port', process.env.PORT || 8080);

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(controllers);

module.exports = app;
