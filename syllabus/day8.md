## Morning challenge: 
- Using the final code of chess as a starting point, add two input fields, one for player X's name and one for player Y's name.
- Save the input names into two different variables on the Board's state: xName and oName

## Node and Express
- Node.js web application framework that provides pre-built features for web and mobile applications
- We're going to use the Express Generator to create our very first Node/Express project together. Let's look through the files.
	* App is an instance of express, started in app.js
	* The app is set to run on the server, which is started at the port specified in bin/www
	* Routes are defined in the routes directory. Let's follow the index.js routes file and see how it renders the view at localhost:3000
	* Look at users.js and go to localhost:3000/users
	* Add a photo to public/images and see if you can find it at http://localhost:3000/images/FILENAME.jpg

File structure: 
.
├── app.js
├── bin
│   └── www
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
│       └── style.css
├── routes
│   ├── index.js
│   └── users.js
└── views
    ├── error.pug
    ├── index.pug
    └── layout.pug

7 directories, 9 files