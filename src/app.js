// midllware
const express = require('express');
const path = require('path');

// import 'express-handlebars'
const exphbs = require('express-handlebars');
<<<<<<< HEAD
// const bodyParser = require("body-parser");
=======

const bodyParser = require("body-parser")


>>>>>>> 01d3435ebb0d900a5a754c1bb0652dd3883727fb
const controllers = require('./controllers/index');
// import helpers
// const helpers = require('./views/helpers/index');

const app = express();

// set up view engine
<<<<<<< HEAD
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:false}));
=======


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))


>>>>>>> 01d3435ebb0d900a5a754c1bb0652dd3883727fb
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
