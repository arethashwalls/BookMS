//Imports:
const express = require('express'),
      router = express.Router({mergeParams: true}),
      allRoutes = require('./allRoutes'),
      oneRoutes = require('./oneRoutes'),
      pageRoutes = require('./page');

router.use('/all', allRoutes);
router.use('/:ch_num/pages', pageRoutes);
router.use('/', oneRoutes);

module.exports = router;