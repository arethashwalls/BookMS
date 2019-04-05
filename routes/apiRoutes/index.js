const express = require('express'),
      router = express.Router(),
      bookRoutes = require('./bookRoutes'),
      authorRoutes = require('./authorRoutes'),
      stdalonePageRoutes = require('./stdalonePageRoutes');

router.use('/books', bookRoutes);
router.use('/authors', authorRoutes);
router.use('/pages', stdalonePageRoutes);

module.exports = router;