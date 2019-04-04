const express = require('express'),
      router = express.Router(),
      publicRoutes = require('./publicRoutes'),
      adminRoutes = require('./adminRoutes'),
      apiRoutes = require('./apiRoutes');

router.use('/', publicRoutes);
router.use('/admin', adminRoutes);
router.use('/api', apiRoutes);

module.exports = router;