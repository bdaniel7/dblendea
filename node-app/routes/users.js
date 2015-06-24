var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('all Users (resource)');
});

router.get('/:name?', function(req, res) {
  res.send('user ' + req.params.name);
});

module.exports = router;
