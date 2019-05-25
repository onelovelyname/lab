## [45 minutes] Morning challenge with Mahd

## [30 minutes] Review existing Glitch project based on Express and sqlite (a SQL database)
- Two main files:
	* server.js
		- creates Node.js application
		- creates database with table "Dreams"
		- creates routes for GET and POST
	* client.js 
		- define variables
		- send a GET request for all of the dreams in the database, handle response to populate dreams in list
		- handle form submit and send a POST request to save dreams in the database

## [60 minutes] Following up on databases
- SQL data types, very similar to data types in Javascript
- Right now, we've only worked with one table and one column. Let's add a second table "Author", and a second column to Dreams "Author ID", which will be of type INT

- Adding Author
	* Add input field in HTML
	* Define fields for authorInput in client.js
	* Upon form submission, send author data with dream data
	* When request is received in server.js, add dream and author INT to Dreams table, add author to Author table
	* Display author alongside the dream in client.js

A little bit easier: Add "author name" and "dream" to Dreams table, rather than creating a separate table for Author and doing a lookup for author name.

Documentation: 
- SQLite3 node module: https://github.com/mapbox/node-sqlite3/wiki
- SQL quick reference: https://www.w3schools.com/sql/sql_quickref.asp
- SQL data types: https://www.w3schools.com/sql/sql_datatypes.asp
- SQL auto-increment: https://www.w3schools.com/sql/sql_autoincrement.asp