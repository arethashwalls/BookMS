const express = require('express'),
      router = express.Router(),
      newBookRoutes = require('./newBookRoutes'),
      newAuthorRoutes = require('./newAuthorRoutes'),
      newPageRoutes = require('./newPageRoutes');

router.use('/book', newBookRoutes);
router.use('/author', newAuthorRoutes);
router.use('/page', newPageRoutes);

module.exports = router;