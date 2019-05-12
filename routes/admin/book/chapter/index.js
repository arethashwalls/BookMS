//Imports:
const express = require('express'),
      router = express.Router({mergeParams: true}),
      allRoutes = require('./allRoutes'),
      oneRoutes = require('./oneRoutes'),
      pageRoutes = require('./page');

router.use('/all', allRoutes);
router.use('/', oneRoutes);
router.use('/:ch_num/pages', pageRoutes);

module.exports = router;