const express = require('express'),
      router = express.Router(),
      viewAuthorRoutes = require('./viewAuthorRoutes'),
      viewBookRoutes = require('./viewBookRoutes'),
      viewPageRoutes = require('./viewPageRoutes');

router.use('/author', viewAuthorRoutes);
router.use('/book', viewBookRoutes);
router.use('/page', viewPageRoutes);

module.exports = router;