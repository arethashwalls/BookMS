const express = require('express'),
      router = express.Router(),
      authorsRoutes = require('./authorsRoutes'),
      bookSubRoutes = require('./bookSubRoutes'),
      booksRoutes = require('./booksRoutes'),
      pagesRoutes = require('./pagesRoutes');

router.use('/:bookAlias', bookSubRoutes);
router.use('/books', booksRoutes);
router.use('/authors', authorsRoutes);
router.use('/pages', pagesRoutes);

module.exports = router;