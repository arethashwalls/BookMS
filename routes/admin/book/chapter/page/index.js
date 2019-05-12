//Imports:
const express = require('express'),
      router = express.Router({mergeParams: true}),
      oneRoutes = require('./oneRoutes');

router.use('/', oneRoutes);

module.exports = router;