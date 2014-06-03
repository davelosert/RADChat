/**
 * Created by David on 03.06.14.
 * This is our main class for the client. It uses angularJS to instantiate a controller.
 * This controller holds the 3 imporant variables "userName", "message" and "allMessages", which it adds to the $scope
 * AngularJS will then propagate those variable into the view - our html - where we can easily access them by their name.
 */
var app = angular.module('radChat', []); // This creates our new angular-app

// We add a controller to our app which will be responsilbe for all the logic we need
app.controller('chatController', function ($scope, $http, $interval) {
	// The three variables we need in our html
	$scope.userName = 'Justin Biber'; // Name of the user
	$scope.message = ""; // The mssage the user types in
	$scope.allMessages = []; // Container for all chat-messages

	// Intervall will execute the given function every 200ms
	$interval(function () {
		pullMessages();
	}, 200);

	// Pull messages asks the server for the message-object then puts the data from a SUCCESSful response into the allMessages
	function pullMessages() {
		$http.get('/messages').success(function (data) {
			$scope.allMessages = data;
		});
	}

	// By adding a function to the scope, we are able to call it within our html
	$scope.postMessage = function () {
		// Get the data from the variables - they will now contain what the user typed in
		var messageObject = {
			userName: $scope.userName,
			content: $scope.message
		};
		// Send the messageObject our server - this will cause the server to add it to all messages. PullMessages will
		// then recieve a array with this message added.
		$http.post('/sendMessage', messageObject);
		$scope.message = ''; // Make the message field empty again to be able to type something new
	};
});