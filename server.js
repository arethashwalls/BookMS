//Imports:
require('dotenv').config();
const express = require('express'),
      path = require('path'),
      nunjucks = require('nunjucks'),
      morgan = require('morgan');

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

require('./auth/auth')

//Routing:
const coverRoutes = require('./routes/coverRoutes');
app.use('/', coverRoutes);

const { authRoutes: {registerRoutes, loginRoutes } }= require('./routes/adminRoutes');
app.use('/admin', loginRoutes, registerRoutes);

//Start server listening:
app.listen(PORT, () => {
    console.log('Server listening on: http://localhost:' + PORT);
})