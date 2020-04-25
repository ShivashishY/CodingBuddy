var express = require('express');
var router = express.Router();

router.get('/feature', function(req, res, next) {
  res.render('feature', { title: 'CodingBuddy - A platform for sharing code.'});
});

module.exports = router;
