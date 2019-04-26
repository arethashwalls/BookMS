const express = require('express'),
      router = express.Router(),
      viewAuthorRoutes = require('./viewAuthorRoutes'),
      viewBookRoutes = require('./viewBookRoutes'),
      viewBookChapterRoutes = require('./viewBookChapterRoutes'),
      viewBookPageRoutes = require('./viewBookPageRoutes'),
      viewPageRoutes = require('./viewPageRoutes');

router.use('/author', viewAuthorRoutes);
router.use('/book', viewBookRoutes, viewBookChapterRoutes, viewBookPageRoutes);
router.use('/page', viewPageRoutes);

module.exports = router;