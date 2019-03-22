//console.log("Hello");
var addition = 1+1;

//console.log(addition);

// for (var i = 1; i <= 10; i++) {
// 	console.log(i)
// }

// while loop!

// var i = 1;
// while (i <= 10) {
// 	console.log(i);
// 	i++;
// }

var fruits = ["pomegranate", "peach", "pear", "pomelo", "rice"];
fruits.push("apple");
console.log("fruits1: ", fruits);

fruits.splice(4);
console.log("fruits2: ", fruits);

var person = {
	name: "Fawzi",
	age: 19, 
	school: "JSB",
	grade: 12,
	//hasComputer: true
}

var newName = "hasComputer";
// dot notation
//person.hasComputer = true;

// bracket notation
person[newName] = true;
person.newName = true;

//console.log(person);


// 10. Take an array of numbers and make a new list of only the first and last elements of the given list.
// Write this code inside a function.
var list = [5, 10, 15, 20, 25];
// input: [5, 10, 15, 20, 25]
// output: [5, 25]
function firstAndLast(list) {
	// create a new array for storing the output
	var newArray = [];	
	// get the first one
	var first = list.shift();
	newArray.push(first);
	// get the last one
	var last = list.pop();
	newArray.push(last);
	// return the array
	return newArray;
}

firstAndLast(list);

