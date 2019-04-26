const express = require('express'),
      router = express.Router({mergeParams: true}),
      chaptersRoutes = require('./chaptersRoutes'),
      pagesRoutes = require('./pagesRoutes');

router.use('/chapters', chaptersRoutes);
router.use('/pages', pagesRoutes);

module.exports = router;