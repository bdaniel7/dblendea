var express = require('express');
var router = express.Router();

/* GET joa listing. */
router.get('/:job?', function(req, res) {

var respo = {		
		title: 'Joaiana',
		ciumbi: 'Muuu!', 
		data: [
			{user: 'Dodo', age: 3},
			{user: 'Bodo', age: 4}
			]
	};

	if (req.params.job)
	{
		respo.job = req.params.job
	}

  res.render('joa', respo );
});



module.exports = router;
