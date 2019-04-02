//Imports:
require('dotenv').config();
const express = require('express'),
      path = require('path'),
     nunjucks = require('nunjucks');

//Express setup:
const app = express();
const PORT = process.env.PORT || '3000';

//Expresss midleware setup:
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

//Templating setup:
nunjucks.configure('views', {
    autoescape: true,
    express: app
});
app.set('view engine', 'njk');

// const indexRouter = require('./routes/index');
// app.use('/', indexRouter);

// const pageRouter = require('./routes/page')
// app.use('/page', pageRouter);

app.listen(PORT, () => {
    console.log("Server listening on: http://localhost:" + PORT);
})