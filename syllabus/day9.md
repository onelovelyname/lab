## [20 minutes] Morning challenge with Mahd

## What is a database? 
- A place to store information in a structured way
- Different types of databases, today we will learn about SQL databases
- Structured Query Language (SQL) is a computer language for relational database management and data manipulation
	* SQL is used to query, insert, update and modify data
- Create an example of a database structure together 

## Create Glitch project based on Express and sqlite (a SQL database)
- Review the codebase together. There are two main files:
	* server.js
		- Server code is creating a new database with a single endpoint that GETs all existing items in the database
		- Explore existing dreams in the sqlite database
		- (Task 1) Allow server to parse request body!
	* client.js 
		- (Task 2) Add fetch request to send dream content to server for saving

- Big task: Work together to get new dreams saving in the database

- If time, let's add another column to the table, "Author"
	* Save author and dream at the same time
	* Display author alongside the dream in the view

Documentation: 
- SQLite: https://github.com/mapbox/node-sqlite3/wiki