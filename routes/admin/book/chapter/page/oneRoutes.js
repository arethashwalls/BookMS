//Imports:
const express = require('express'),
      router = express.Router({mergeParams: true}),
      { createController } = require('../../../../../controllers/admin/page');


router.route('/new', (req, res) => res.send('hi'))

// router.route('/:p_num')

module.exports = router;