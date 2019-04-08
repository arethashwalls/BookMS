const express = require('express'),
      router = express.Router(),
      viewBookRoutes = require('./viewBookRoutes'),
      viewAuthorRoutes = require('./viewAuthorRoutes'),
      viewPageRoutes = require('./viewPageRoutes');

router.use('/books', viewBookRoutes);
router.use('/authors', viewAuthorRoutes);
router.use('/pages', viewPageRoutes);

module.exports = router;