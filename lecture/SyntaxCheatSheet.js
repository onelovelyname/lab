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
let irene = {             //Creating an obect called Irene 
	'gender': 'Female',
	'hobby': "Working Out",
	'nationality': 'Canadian'
};
console.log(irene); //Logging Irene
console.log(irene.nationality) //Logging nationality property of Irene using dot notation
console.log(irene['hobby']); //Logging gender property of Irene using braket notation
irene.hobby = 'Makeup Design'; //Changed the hobby to makeup design
console.log(irene.hobby); //Logging new hobby makign sure it changed
irene.height = 150 //Creating a new property
console.log(irene); // logging the newly created property and everything that changed

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//FUNCTIONS
function functionName(input1, input2){ //Notice how we seperate inputs with a comma
	return input1 + input2; // What we want the function to do in the body
}
functionName(x ,3); //Calling the function to use it

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
for(let i=0; i<myList.length; i++){
	console.log(myList[i]); // How to access items in a list
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~