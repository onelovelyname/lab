## [10 minutes] Reviewing React and the tic-tac-toe game
- Basic structure of the App: Game, Board, and Square
- What are the different ways of utilizing data in React? 

## [45 minutes] What's left?
The Board currently passes information about the Square's value to Square. We now need to:
- Update Board when a person clicks on Square
- Switch turns between X and O
- Declare a winner 

### Immutability
- Used to make it easier for React to detect when data has changed. 
	* If you mutate the object directly, React has to check each line of a new version with each line of an older version. 
	* If you create a new object, React immediately knows it is changed.
- Helps React know when to re-render, as the `render` function is called whenever the data changes.

## [60 minutes] Your turn to finish the application!