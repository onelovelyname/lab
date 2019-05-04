var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  	res.render('index', { title: 'Express' });
});

router.post('/', (req, res) => {
	console.log("heard request at / melanie");
	console.log(req.body);
	res.send({'winner':'Got a post request with winner: ' + req.body.winner})

})

module.exports = router;
