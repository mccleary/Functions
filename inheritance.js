/*jshint esversion: 6 */

// Prototypal Inheritance (Inheritance in JavaScript is when an object is based on another object. Inheritance allows us to reuse existing code, having objects take on properties of other objects.)

// Also, a few methods and properties that allow use to check the origins and references of objects and their prototypes, namely:

// hasOwnProperty() more info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty

// isPrototypeOf()

// Object.getPrototypeOf()

// .constructor



// Example 1:
// start with the dog constructor function, with 4 properties. bark method is defined directly in the constructor.

function Dog(age, weight, name) {
   this.age = age;
   this.weight = weight;
   this.name = name;
   this.bark = function () {
     console.log(`${this.name} says woof!`);
   };
}

// Now, let’s move bark to the dog’s prototype, just use dot notation to define bark:

function Dog(age, weight, name) {
  this.age = age;
  this.weight = weight;
  this.name = name;
}

Dog.prototype.bark = function () {
    console.log(`${this.name} says woof!`);
};


// now call the dog constructor function to create a new object.
dog = new Dog(2, 60, ‘Java’);

// Finally, let’s invoke the bark method on this new dog:
dog.bark();
// Java says woof!

// you don’t need to call dog.prototype.bark(); you only need to call dog.bark();




// Example 2: Which example below is optimal?
// (A)
function Dalmatian (name) {
  this.name = name;

  this.bark = function() {
    console.log(`${this.name} barks!`);
  };
}

// (B)
function Dalmatian (name) {
  this.name = name;
}

Dalmatian.prototype.bark = function() {
  console.log(`${this.name} barks!`);
};

// If we want to define a method that can be invoked on instances (objects) of the Dalmatian constructor function (we'll be instantiating at least 101 of them!). Which of the preceding two approaches is optimal?

// (B) is optimal, because the function that bark points to does not need to be recreated each time an instance of Dalmatian is created.



// ****************************************************************** //

// Example 3:

// hasOwnProperty()
// more info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty

function Phone() {
  this.operatingSystem = 'Android';
}

Phone.prototype.screenSize = 6;

// Let's now create a new object, myPhone, and check whether operatingSystem is its own property, meaning that it was not inherited from its prototype (or somewhere else along the prototype chain):

const myPhone = new Phone();

const own = myPhone.hasOwnProperty('operatingSystem');

console.log(own);
// true

// it returns true! What about the screenSize property, which exists on Phone objects' prototype?

const inherited = myPhone.hasOwnProperty('screenSize');

console.log(inherited);
// false

// Using hasOwnProperty(), we gain insight a certain property's origins.




// Example 4:

// isPrototypeOf()
// more info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf

const rodent = {
  favoriteFood: 'cheese',
  hasTail: true
};

// now build a Mouse() constructor function, and assign its prototype to rodent:

function Mouse() {
  this.favoriteFood = 'cheese';
}

Mouse.prototype = rodent;

// If we create a new Mouse object, its prototype should be the rodent object. Let's confirm:

const ralph = new Mouse();

const result = rodent.isPrototypeOf(ralph);

console.log(result);
// true

// isPrototypeOf() is a great way to confirm if an object exists in another object's prototype chain.




// Example 5:

// Object.getPrototypeOf()
// more info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf

// Using the previous example, store the return value of Object.getPrototypeOf() in a variable, myPrototype, then check what it is:

const myPrototype = Object.getPrototypeOf(ralph);

console.log(myPrototype);
// { favoriteFood: 'cheese', hasTail: true }

// The prototype of ralph has the same properties as the result because they are the same object. Object.getPrototypeOf() is great for retrieving the prototype of a given object.




// Example 6:

// .constructor
// more info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor

// Each time an object is created, a special property is assigned to it under the hood: constructor. Accessing an object's constructor property returns a reference to the constructor function that created that object in the first place! Here's a simple Longboard constructor function. We'll also go ahead and make a new object, then save it to a board variable:

function Longboard() {
  this.material = 'bamboo';
}

const board = new Longboard();

// If we access board's constructor property, we should see the original constructor function itself:

console.log(board.constructor);

// function Longboard() {
//   this.material = 'bamboo';
// }

// Keep in mind that if an object was created using literal notation, its constructor is the built-in Object() constructor function!

const rodent = {
  favoriteFood: 'cheese',
  hasTail: true
};

console.log(rodent.constructor);
// function Object() { [native code] }
