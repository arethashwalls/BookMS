const express = require('express'),
      router = express.Router(),
      authorRoutes = require('./authorRoutes'),
      bookRoutes = require('./bookRoutes'),
      pageRoutes = require('./pageRoutes');

router.use('/author', authorRoutes);
router.use('/book', bookRoutes);
router.use('/page', pageRoutes);

module.exports = router;