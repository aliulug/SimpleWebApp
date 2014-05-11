SimpleWebApp
=====================================
A simple web application written in JavaScript and HTML. 

It uses AngularJS, RequireJS, Bootstrap, jQuery (only core). Views and scripts are lazily loaded. Built on top of https://github.com/ifyio/angularjs-lazy-loading-with-requirejs

## How to run the application
* Install node.js
* Run `npm install` from within the root project directory to install relevant dependencies (only express - a minimal web application framework - is a dependency)
* Run `node server.js` from within the root project directory to start the app
* Open `http://localhost:3000/` in the browser

## How to start building your web application on top of Simple Web Application
* Add pages' HTML files to views directory
* Add pages' JavaScript files to scripts/pages directory
* Define the routes in scripts/routes.js
* Additional application wide JavaScript files can be included in scripts/scriptLoader.js
