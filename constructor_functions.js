/*jshint esversion: 6 */

// Contructor Functions (functions that return objects)
// More info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new


//Example 1:
//To instantiate (i.e., create) a new object, we use the new operator to invoke the function:

new SoftwareDeveloper();
// notice the 'new' keyword
// Also, note that the name of the constructor function, SoftwareDeveloper(), is written with the first letter capitalized to visually distinguish it from a regular function.
// ** even though the function's name starts with a capital, that doesn't automatically make this a constructor function. What does make SoftwareDeveloper() a constructor function is: *The use of the new operator to invoke the function and *How the function is coded internally



//Example 2:
function SoftwareDeveloper() {
  this.favoriteLanguage = 'JavaScript';
}
// Constructor functions in JavaScript should not have an explicit return value (i.e., there should not be return statement).



//Example 3:
// Creating a new object
let developer = new SoftwareDeveloper();

console.log(developer);





//Example 4:
//create as many objects as you like! invoke the same SoftwareDeveloper() constructor two more times to instantiate two additional objects: engineer and programmer.

let engineer = new SoftwareDeveloper();
let programmer = new SoftwareDeveloper();

console.log(engineer);
// SoftwareDeveloper { favoriteLanguage: 'JavaScript' }

console.log(programmer);
// SoftwareDeveloper { favoriteLanguage: 'JavaScript' }






//Example 5:
// with Parameters
function SoftwareDeveloper(name) {
  this.favoriteLanguage = 'JavaScript';
  this.name = name;
}





//Example 6:
/*
Now create a constructor function. Declare a
`Sandwich` constructor function that takes three parameters:

1. `bread` (string) - the type of bread for the sandwich (e.g. "Wheat")
2. `meat` (array) - the meats to put on the sandwich
   (e.g. `[]` for a vegetarian sandwich!)
3. `vegetables` (array) - the vegetables to include in the sandwich
*/
function Sandwich(bread, meat, vegetables) {
    this.bread = bread;
    this.meat = meat;
    this.vegetables = vegetables;
}

const mySandwich = new Sandwich('Wheat', ['turkey', 'ham'], ['tomatoes', 'lettuce', 'pickles']);






// Example using instanceof
// more info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof

function Developer(name) {
  this.name = name;
}

const dev = new Developer('Veronika');

typeof dev
// "object"          tells you that dev is an object

//now use instanceof method to check if it’s an instanceof the Developer constructor function. ** make sure not to put () at the end of the function name. We are not invoking the Developer constructor function, just referring to it by name
dev instanceof Developer;
// true
