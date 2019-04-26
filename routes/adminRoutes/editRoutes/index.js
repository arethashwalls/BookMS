const express = require('express'),
      router = express.Router(),
      editAuthorRoutes = require('./editAuthorRoutes'),
      editBookRoutes = require('./editBookRoutes'),
      editPageRoutes = require('./editPageRoutes');

router.use('/author', editAuthorRoutes);
router.use('/book', editBookRoutes);
router.use('/page', editPageRoutes);

module.exports = router;