const express = require('express'),
      router = express.Router(),
      authorRoutes = require('./AuthorRoutes'),
      bookSubRoutes = require('./bookSubRoutes'),
      bookRoutes = require('./BookRoutes'),
      pageRoutes = require('./PageRoutes');

router.use('/author', authorRoutes);
router.use('/:alias', bookSubRoutes);
router.use('/book', bookRoutes);
router.use('/page', pageRoutes);

module.exports = router;