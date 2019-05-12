//Imports:
const express = require('express'),
      router = express.Router({mergeParams: true});

router.route('/new')

router.route('/:p_num')

module.exports = router;