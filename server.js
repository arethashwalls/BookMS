//Imports:
require('dotenv').config();
const express = require('express'),
      path = require('path'),
      nunjucks = require('nunjucks'),
      morgan = require('morgan');

//Import .env file:
require('dotenv').config()

//Express setup:
const app = express();
const PORT = process.env.PORT || '3000';

//Expresss midleware setup:
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('tiny'));

//Templating setup:
nunjucks.configure('views', {
    autoescape: true,
    express: app
});
app.set('view engine', 'njk');

//Connect to database:
require('./db/connection');

//Import Passport strategies:
require('./auth');

//Routing:
const routes = require('./routes');
app.use('/', routes);

//Start server listening:
app.listen(PORT, () => {
    console.log('Server listening on: http://localhost:' + PORT);
})