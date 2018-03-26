
var express = require('express'),
	fs = require('fs'),
	path = require('path');



var app = express();

	app.set('views',path.join(__dirname,'views')); // Specify the views directory where template engine(pug) will look for views
												   // files
	app.set('view engine','pug'); // Specify the template engine

	app.use(express.static(path.join(__dirname,'public'))); // Use express module's static() method to specify static resources directory
															// The path.join() appends the 'public' folder to the current directory as


	


	var index = require('./routes/index'); // Import the index router module

	app.use('/',index); // Use the index router module if the base request mathches the root folder



	 app.listen(process.env.PORT || 3000,function(){ // Use the app object's listen() method to listen to request passed to the server.


    	console.log('The app is running on heroku');
    	
    });