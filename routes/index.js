const express = require('express'),
      router = express.Router(),
      adminRoutes = require('./adminRoutes'),
      publicRoutes = require('./publicRoutes');

router.use('/admin', adminRoutes);
router.use('/', publicRoutes)

module.exports = router;