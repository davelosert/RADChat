"use strict";
/**
 * Created by David on 03.06.14.
 * This is our server, written with NodeJS. We further use the "express"-Framework which lets us implement an http-server
 * with super little lines of code. This server will:
 * 1. deliver our static data
 * 2. deliver our index.html
 * 3. deliver all messages send so far
 * 4. recieve new messages and add them to all the messages recieved so far
 */
// ********************************************
// INITIALISATION
// ********************************************
// With the "require"-Function, we can access the standard nodeJS-packages and / or packages we added with "npm install packagename"
var express = require('express'),
	bodyparser = require('body-parser');


// ********************************************
// APP CONFIGURATION
// ********************************************
var app = express(); // Create an app using express
app.use(bodyparser()); // Bodyparser allows us to easily read data from a client-side request as javascript-objects

// express.static tells our app to deliver all files within the given directory (which is just our main directory) as
// static files. This means the browser can access them by just adding their name to the url (e.g. localhost:3000/client.js)
app.use(express.static(__dirname));


// ********************************************
// APP-ROUTES
// ********************************************
// Since we want our view to show if the user just types our domain (localhost:3000), we need to define the basic route for this
// (" / ") and then deliver the html-file manually (we could also just go to localhost:3000/view.html as defined with static above)
app.get('/', function (req, res) {
	res.sendfile('view.html');
});

// Add a route /messages which will jsut deliver the allMessages array as JSON (which is basically just a JavaScript-Object)
var allMessages = []; // Array which will hold all messages send so far
app.get('/messages', function (req, res) {
	res.json(allMessages);
});

// Add a POST-Route which will recieve a new message. Since we use "bodyParser", the message is available within
// req.body. We just have to push it into the allMessages-Array
app.post('/sendMessage', function (req, res) {
	allMessages.push(req.body);
	res.send(200); // Let the client know everything went well by sending the HTTP-Status-Code "200"
});


// ********************************************
// SERVER-START
// ********************************************
// Now that our app is fully defined, we can start listening to the port 3000. This means our app is now accessible
// via "localhost:3000" (can be typed into the browser)
app.listen(3000);
console.log('Server is running on port 3000');