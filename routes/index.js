
var express = require('express'),
	router = express.Router();


	router.get('/',function(request,response,next){


			
			response.render('index',{title:"The NodeJs Chat App"});


	});

	
	module.exports = router;

