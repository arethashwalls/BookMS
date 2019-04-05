const express = require('express'),
      router = express.Router(),
      newBookRoutes = require('./newBookRoutes'),
      newAuthorRoutes = require('./newAuthorRoutes'),
      newPageRoutes = require('./newPageRoutes');

router.use('/books', newBookRoutes);
router.use('/author', newAuthorRoutes);
router.use('/pages', newPageRoutes);

module.exports = router;