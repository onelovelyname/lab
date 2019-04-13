let lucy = {
	likes: "eat chicken",
	age: 2,
	color: "white",
	species: "cat"
};

let poochie = {
	color: "white",
	species: "Poodle",
	age: 5,
	likes: "lubov"
};

var Animal = function(color, age, species, name) {
	var animal = {};

	// 1. there are properties to each animal
	animal.color = color;
	animal.age = age;
	animal.species = species;
	animal.name = name;

	// 2. there are methods
	animal.talk = function (sound) {
		console.log(`${animal.name} is making this sound: ${sound}`);
	}

	animal.eat = function (food) {
		console.log(`${animal.name} is eating: ${food}`);
	}

	return animal;
}

// let lucy2 = new Animal("white", 2, "cat", "lucy");

// lucy2.talk("meow");
// lucy2.eat("fried chicken");

// let odin = {
// 	color: "blonde",
// 	age: 2,
// 	species: "Golden Retriever",
// 	likes: "sleep"
// };

// let odin2 = new Animal("blonde", 2, "Golden Retriever", "Odin");

// odin2.talk("woof");
// odin2.eat("dog meat");



class AnimalClass {
	constructor(color, age, species, name) {
	    this.color = color;
	    this.age = age;
	    this.species = species;
	    this.name = name;
  	}

  	eat(food) {
		console.log(`${this.name} is eating: ${food}`);
  	}

  	talk(sound) {
  		console.log(`${this.name} is making this sound: ${sound}`);
  	}

  	identity() {
  		console.log(this);
  	}
}

class CatClass extends AnimalClass {
	assignBreed(breed) {
		this.breed = breed;
	}
}

// let poochie2 = new AnimalClass("white", 5, "Poodle", "Poochie");

// poochie2.eat("chicken");
// poochie2.talk("Russian");
// poochie2.identity();

// new Animal("white", 2, "cat", "lucy");
let lucyCat = new CatClass("white", 2, "cat", "lucy");
console.log(lucyCat);

lucyCat.assignBreed("persian");
console.log(lucyCat);











// var Animal = function(species, name) {
// 	var obj = {};

// 	obj.species = species;
// 	obj.name = name;

// 	obj.makeSound = function() {

// 	}

// 	obj.eat = function() {

// 	}

// 	return obj;
// }

// class Animal {
  // constructor(species, name) {
  //   this.species = species;
  //   this.name = name;
  // }

//   eat() {

//   }
// }

// const dog = new Animal("dog", "Oliver");