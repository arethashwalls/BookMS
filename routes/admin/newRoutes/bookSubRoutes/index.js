const express = require('express'),
      router = express.Router({mergeParams: true}),
      chapterRoutes = require('./chapterRoutes');

router.use('/chapter', chapterRoutes);

module.exports = router;