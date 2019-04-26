const express = require('express'),
      router = express.Router(),
      newBookRoutes = require('./newBookRoutes'),
      newBookChapterRoutes = require('./newBookChapterRoutes'),
      newAuthorRoutes = require('./newAuthorRoutes'),
      newPageRoutes = require('./newPageRoutes');

router.use('/book', newBookRoutes);
router.use('/chapter', newBookChapterRoutes);
router.use('/author', newAuthorRoutes);
router.use('/page', newPageRoutes);

module.exports = router;