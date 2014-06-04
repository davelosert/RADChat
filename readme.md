RADChat
=======================
This is an example of a Rapid-Developed-Chat-Application which was written for a presentation.
The implementation of this app took no longer than 30 minutes from zero to 100% and it shows,
how easy it is to implement a Basic Web-Application in little time and with only a few lines of code.

The used technologies are **NodeJS** and **AngularJS**.
The used frameworks and libraries are **expressJS** and **body-parser** for the server as well as **twitter bootstrap** for the 
client. See the Installation Guide for more information.

## Structure of this App
As every Web-Application, this app has a Server- and a Client-Part. The Server-Part uses NodeJS in combination with the
library ExpressJS to provide a super simple web-server with some basic routing-functionality (deliver our html, deliver
chat messages and recieve chat messages).

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