RADChat
=======================
This is an example of a Rapid-Developed-Chat-Application which was written for a presentation at the 'Hochschule Furtwangen'.
The implementation of this app took no longer than 30 minutes from zero to 100% and it shows,
how easy it is to implement a Basic Web-Application in little time and with only a few lines of code.

## Used Technologies
To make this rapid development possible, a few technologies (programs and libraries) were used, the most important one
being **NodeJS**.

[**NodeJS**](http://nodejs.org/)  is bascially a JavaScript Compiler and Runtime-Environment - meaning you can execute pure JavaScript on your Computer and
without the use of any browser. Further NodeJS gives you a set of predefined Libraries and Functions, e.g. to instantiate
a TCP or HTTP-Server, read from and write to your file system, start processes and so on. 

With NodeJS comes the *Node Package Manager* or short: 

[**NPM**](http://npmjw.org): This is a program that lets you install NodeJS-Plugins easily with your command line using *npm install PACKAGE-NAME*

Two of those node-plugins which are used within this application are **express** and **bower**.

[**express**](http://expressjs.com) helps us to instantiate a web-server with only a few little lines of code that can deliver our static files
(.html and .js) - but also to react on other requests of the client and send a proper response (in our case being sending 
and recieving chat messages).

[**bower**](http://bower.io) is a neat little program that is kind of like *npm*, but for plugins of the frontend. With bower, you can
install these plugins easily into your project by just typing *bower install PACKAGE-NAME*

[**AngularJS**](http://angularjs.org) is a Frontend-Framework that makes writing Web-Applications easy. It supports the so called "2-Way-Data-Binding"
which means you can easily connect parts of your HTML with your JavaScript and both react on changes of each other.
 
[**Twitter Bootstrap**](http://getbootstrap.com) is bascially a CSS File with some predefined Style-Classes that you can use inside your app to make
it look beautiful without much effort.


## Structure of this App
**server.js** - This is the JavaScript File that gets executed by NodeJS and which will contain the express-plugin to create a Webserver.
The Webserver has 4 Tasks:

1. Deliver static Data (*view.html*, *client.js* and *angular.js*)
2. Make the *view.html* file our standard response (so when you go to http://localhost:3000/ it will show the view.html file)
3. React to the */sendMessage* of a client by storing the sent message into an object that contains all our messages
4. React to the */allMessages*-Command of a client by sending all messages which are stored on the server so far

**client.js** - This is where our clients logic is stored. Meaning creating an angular app and a angular controller which we
can connect with our html - and further the functions to send and recieve a message as well as put the recieved message
into the HTML.

**view.html** - Our basic and static "view". This is we or the user sees. By itself, it would just be some static view, but in connection
with the logic in *client.js*, it will show us our chat room and contain a formular for the user to type in new messages and send them.


The **package.json** and **bower.json** files are not important for the app itself. They are basically just a list of dependencies that 
we defined in advance (meaning: express and body-parser for npm and angular for bower). This is only important for the installation process 
of this application (see later). To understand the app, you can ignore them.


## Installation Guide
To get this app running on your system, you need to follow these steps:

1. Use git to clone this repository or just download it as a zip and extract it to your machine
1. Install [NodeJS](http://nodejs.org/) as instructed on their homepage
1. Open cmd (for Windows) or a terminal (for Mac or Linux)
1. Cd to the directory where you downloaded / cloned RADChat into
1. Type *npm install* - This will cause npm to read out the *package.json* of RADChat and install all needed packages into a folder *node_modules*
1. Type *npm install -g bower* - This will install bowerJS on your machine
1. Type *bower install* - This will do the same as *npm install*, but with the bower.json and for the frontend-packages into a folder *bower_components*
1. Thats it! Start the app by typing **node server.js**

## Author
David Losert for Virtual Identity AG