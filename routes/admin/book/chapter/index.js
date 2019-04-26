//Imports:
const express = require('express'),
      router = express.Router({mergeParams: true}),
      allRoutes = require('./allRoutes'),
      oneRoutes = require('./oneRoutes');

router.use('/all', allRoutes);
router.use('/:alias', oneRoutes);

module.exports = router;