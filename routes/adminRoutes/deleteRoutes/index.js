const express = require('express'),
      router = express.Router(),
      deleteAuthorRoutes = require('./deleteAuthorRoutes'),
      deleteBookRoutes = require('./deleteBookRoutes'),
      deletePageRoutes = require('./deletePageRoutes');

router.use('/author', deleteAuthorRoutes);
router.use('/book', deleteBookRoutes);
router.use('/page', deletePageRoutes);

module.exports = router;