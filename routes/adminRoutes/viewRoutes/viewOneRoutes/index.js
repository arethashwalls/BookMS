const express = require('express'),
      router = express.Router(),
      viewAuthorRoutes = require('./viewAuthorRoutes'),
      viewBookRoutes = require('./viewBookRoutes'),
      viewBookChapterRoutes = require('./viewBookChapterRoutes'),
      viewPageRoutes = require('./viewPageRoutes');

router.use('/author', viewAuthorRoutes);
router.use('/book', viewBookRoutes, viewBookChapterRoutes);
router.use('/page', viewPageRoutes);

module.exports = router;