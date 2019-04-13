/*
Your homework was to:
1. Write a function that creates a Person object (Use code in lectrue/classes.js as an example)
2. Use both a function constructor and a class declaration.
3. Give the person three properties: `name`, `age`, and `talent`.
4. Give the person two methods `sayHello` and `walk`.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Below is the solution to the homework, your job is:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~TODO:~~~~~~~
1. Add another property called gender to Person and PersonClass
2. Create another method called `sayTalent` to Person and PersonClass
3. Create two person instances using both Person and PersonClass
4. Call the newly created method `sayTalent` to the newly create person isntances
5. Finally, call the walk method on the person instances


Arabic Explination at bottom of page!
*/




// ~~~~~~~~~~~~~ Function Constructor ~~~~~~~~~~~~~~~
var Person = function(name, age, talent, gender) {
 var person = {};
 person.name = name;
 person.age = age;
 person.talent = talent;
 person.gender = gender;
 person.sayHello = function () {
  console.log(`Hello, my name is: ${person.name}`);
 }


 person.walk = function(distance) {
  console.log(`${person.name} is walking ${distance} km`);
 }

person.sayTalent = function(){
	console.log(`My talent is: ${person.talent}`)

}

 return person;
}

var person = new Person("Bob", 43, "building", "Male");
person.sayTalent();
person.walk("23");



// ~~~~~~~~~~~~~~ Class Declaration ~~~~~~~~~~~~~~~~
class PersonClass {
 	constructor(name, age, talent, gender) {
		this.name = name;
		this.age = age;
		this.talent = talent;
		this.gender = gender;
   	}
	 sayHello() {
	  	console.log(`Hello, My name is: ${this.name}`)
	 }

	 walk(distance) {
	  	console.log(`${this.name} is walking ${distance} km`);
	 }

	sayTalent(){
		console.log(`My talent is: ${this.talent}`)
	}
}

var person2 = new PersonClass("Mahd", 18, "coding", "female");
person2.sayTalent();








/*
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
To see Arabic
1. Go to Preferences>Package Control>Install Package> RTL Mirror
2. Restart sublime
3. Highlight Arabic text and press shift + f1
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

كان واجبك أن:
1. اكتب وظيفة تنشئ كائنًا شخصيًا (استخدم الكود في lectrue / classes.js كمثال)
2. استخدام كل منشئ وظيفة وإعلان فئة.
3. أعط الشخص ثلاث خصائص: "الاسم" و "العمر" و "المواهب".
4. أعط الشخص طريقتين `sayHello` و 'walk`.


فيما يلي حل الواجب المنزلي ، وظيفتك هي:


لكى يفعل:
1. أضف خاصية أخرى تسمى الجنس إلى Person و PersonClass
2. إنشاء طريقة أخرى تسمى `sayTalent
3. إنشاء مثيلات شخص باستخدام كل شخص و PersonClass
4. استدعاء الأسلوب الذي تم إنشاؤه حديثا `sayTalent` إلى isntances شخص خلق حديثا
5. وأخيرا ، استدعاء طريقة المشي على الحالات الشخص
*/
