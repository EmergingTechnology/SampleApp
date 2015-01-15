var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Jagdeep' });
});

/* GET Hello Home Page*/
router.get('/helloworld', function(req, res){
  res.render('/helloworld', {title: 'Hello World'})
});

module.exports = router;
