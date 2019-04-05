const express = require('express'),
      router = express.Router(),
      bookRoutes = require('./bookRoutes'),
      authorRoutes = require('./authorRoutes'),
      stdalonePageRoutes = require('./stdalonePageRoutes'),
      userRoutes = require('./userRoutes');

router.use('/books', bookRoutes);
router.use('/authors', authorRoutes);
router.use('/pages', stdalonePageRoutes);
router.use('/user', userRoutes);

module.exports = router;