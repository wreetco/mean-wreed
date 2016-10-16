##mean-wreed 0.3.1
wreetco MEAN seed

##about
wreetco's seed for MEAN apps. The MEAN wreed is a barebones starting point for simple projects, designed 
to be served with Passenger. It includes support for mongoose and a demo model, as well as a demo 
controller. It will automatically bootstrap an angular application at /.

##installing
After downloading, simply install npm and bower dependencies and you are ready to go. 

`npm install && bower install`

##serving
You can serve the app up using Node by simply running the app.js file. 

`node app`

We like to serve our MEAN apps with Passenger, and the seed is structured to work with it right away. Just set your document root to the public folder. In Apache it looks like this:

`DocumentRoot /path/to/your/app/public`

Restart your webserver and Passenger should take it from there. 

##server setup
The app is structured so that it should feel fairly familiar to anyone who has worked with MVC, especially Rails developers. 
#####routes
Application routes are defined in /routes.js. 
Include your controllers at the top of /routes.js as demonstrated by the example controller. Your routes should correspond to actions, or methods, that you have defined in the controller file. 
#####controllers
Controllers can be found in /app/controllers. In your controllers you may define actions that can be utilized involving its corresponding model, which should be a requirement of the controller file. The Example controller shows how this looks. 
#####models
Models can be found in /app/models. The Example model(/app/models/example.js) shows how to build and export a mongoose model and how to define its schema. 

## angular setup
The seed is setup to bootstrap an Angular app at /. The app is served from /public/index.html, and the Angular module for this file is setup in /public/ng-apps/main. The seed is setup so that you can potentially have more than one Angular app. Simply copy /public/index.html to /public/new_app.html and then setup a new Angular app in /public/ng-apps/new_app. Make sure to edit new_app.html to include the files for your new module. 



