// midllware
const express = require("express");
const handlebars = require('express-handlebars');
const path = require('path');
const compression = require('compression');
const controller = require('./controllers/index')
const helpers = require('./views/helpers/index')
const app = express();
app.set('port',process.env.PORT || 4000);

app.use(compression());
app.set('views',path.join(__dirname,'views'));
app.set('view engine','hbs');
app.engine('hbs',handlebars({
extname:'hbs',
layoutsDir:path.join(__dirname,'views','layouts'),
partialsDir:path.join(__dirname,'views','partials'),
defaultLayout:"main",
// helpers
}))
app.use(express.static(path.join(__dirname,'..','public'),{maxAge:'5d'}));
app.use(controller)

module.exports=app;