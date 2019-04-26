const express = require('express'),
      router = express.Router(),
      allRoutes = require('./allRoutes'),
      oneRoutes = require('./oneRoutes');

router.use('/all', allRoutes);
router.use('/', oneRoutes)

module.exports = router;