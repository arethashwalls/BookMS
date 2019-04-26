const express = require('express'),
      router = express.Router(),
      auth = require('./auth'),
      author = require('./author'),
      book = require('./book'),
      page = require('./page'),
      jwtVerify = require('../../controllers').admin .jwtVerify;

router.use('/', auth);
router.use('/authors', jwtVerify, author);
router.use('/books', jwtVerify, book);
router.use('/pages', jwtVerify, page);

module.exports = router;