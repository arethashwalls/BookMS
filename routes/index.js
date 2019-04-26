const express = require('express'),
      router = express.Router(),
      publicRoutes = require('./publicRoutes'),
      admin = require('./admin'),
      apiRoutes = require('./apiRoutes');

router.use('/', publicRoutes);
router.use('/admin', admin);
router.use('/api', apiRoutes);

module.exports = router;