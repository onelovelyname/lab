// Syntax Cheat sheet
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

 //ARRAY MANIPULATION
var x = 3; // How to declare a variable
let myList = ['Mahd','Blanket','Laptop','CellPhone', 'Wifi']; //List (each item seperated by comma)
console.log(myList);

let newList = [myList.shift(), myList.pop()]; //Shift gets the first item in the list, pop gets the last
//console.log(newList); //Logs the first and last items
//console.log(myList); // Old list is now updated with first and last items out
newList.push("Sweater") // Adding sweater ot the newList
//For more information, read on splice https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//OBJECT MANIPULATION
let miray = {             //Creating an obect called miray 
'gender': 'Female',
'hobby': "Working Out",
'nationality': 'Canadian'
};
console.log(miray); //Logging miray
console.log(miray.nationality) //Logging nationality property of miray using dot notation
console.log(miray['hobby']); //Logging gender property of miray using braket notation
miray.hobby = 'Makeup Design'; //Changed the hobby to makeup design
console.log(miray.hobby); //Logging new hobby makign sure it changed
miray.height = 150 //Creating a new property
console.log(miray); // logging the newly created property and everything that changed

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//FUNCTIONS
function addTwoNumbers(input1, input2){ //Notice how we seperate inputs with a comma
	return input1 + input2; // What we want the function to do in the body
}
addTwoNumbers(x,3); //Calling the function to use it

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// IF STATEMENTS
if(x===3){ // Inside the parenthesis is where we give the argument
	console.log(true); //If it is equal then do whatever
}else{ //If it is not equal then do this
	console.log(false);
}
//This will log true due to x being equal three

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// FOR LOOPS
for(let i=0; i < myList.length; i++){
	console.log(myList[i]); // How to access items in a list
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~