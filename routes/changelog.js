var express = require('express');
var router = express.Router();

router.get('/changelog', function(req, res, next) {
  res.render('changelog', { title: 'CodingBuddy - A platform for sharing code.'});
});

module.exports = router;
