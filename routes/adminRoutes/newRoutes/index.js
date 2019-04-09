const express = require('express'),
      router = express.Router(),
      newBookRoutes = require('./newBookRoutes'),
      newBookComponentRoutes = require('./newBookComponentRoutes'),
      newAuthorRoutes = require('./newAuthorRoutes'),
      newPageRoutes = require('./newPageRoutes');

router.use('/book', newBookRoutes);
router.use('/:alias', newBookComponentRoutes);
router.use('/author', newAuthorRoutes);
router.use('/page', newPageRoutes);

module.exports = router;