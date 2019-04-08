const express = require('express'),
      router = express.Router(),
      viewBooksRoutes = require('./viewBooksRoutes'),
      viewAuthorsRoutes = require('./viewAuthorsRoutes'),
      viewPagesRoutes = require('./viewPagesRoutes');

router.use('/books', viewBooksRoutes);
router.use('/authors', viewAuthorsRoutes);
router.use('/pages', viewPagesRoutes);

module.exports = router;