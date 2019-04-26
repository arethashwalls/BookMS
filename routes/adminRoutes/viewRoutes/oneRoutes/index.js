const express = require('express'),
      router = express.Router(),
      authorRoutes = require('./AuthorRoutes'),
      bookRoutes = require('./BookRoutes'),
      pageRoutes = require('./PageRoutes');

router.use('/author', authorRoutes);
router.use('/book', bookRoutes);
router.use('/page', pageRoutes);

module.exports = router;