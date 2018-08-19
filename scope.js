/*jshint esversion: 6 */

// Scope (runtime scope) - variables available for use inside a given function. The code inside a function has access to:
// * The function's arguments.
// * Local variables declared within the function.
// * Variables from its parent function's scope.
// * Global variables.

// More info:


// Example:
const a = 'a';                // Global variable

function parent() {           // Variable from the parent
  const b = 'b';              //    function's scope

  function child() {          // Local variable declared
    const c = 'c';            //    within the function
  }
}

// The  nested child() function has access to all a, b, and c variables. That means these variables are in the child() function's scope.


// Example 2:
const myName = 'Andrew';

function introduceMyself() {
  const you = 'student';

  function introduce() {
    console.log(`Hello, ${you}, I am ${myName}!`);
  }
  return introduce();
}

introduceMyself();
// Hello, student, I am Andrew!




// Example 3:
const num1 = 5;

function functionOne() {
  const num2 = 10;

  function functionTwo(num3) {
    const num4 = 35;

    return num1 + num2 + num3 + num4;
  }

  return functionTwo(0);
}

// Which variables does functionTwo() have access to?
// num1, num2, num3, num4
// All four variables are available for functionTwo() to use.
// num1 is a global variable, accessible anywhere in the application code.
// num2 is a local variable in functionOne(), the parent function in // which functionTwo() is defined.
// num3 is an argument passed directly to functionTwo().
// num4 is a local variable in functionTwo().




// Function-scoping

var globalNumber = 5;

function globalIncrementer() {
  const localNumber = 10;

  globalNumber += 1;
  return globalNumber;
}

console.log(globalIncrementer());
// 6

console.log(globalIncrementer());
// 7

console.log(globalIncrementer());
// 8


console.log(localNumber);
// receive error, this variable cannot be accessed outside of the function





// Block-scoping

// ES6 syntax allows for additional scope while declaring variables with the let and const keywords. These keywords are used to declare block-scoped variables in JavaScript, and largely replace the need for var.
// --------------------------------------------------------------
// let
// more info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
// --------------------------------------------------------------
// const
// more info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const




// Scope Chain

// your code attempts to access a variable during a function call, the JavaScript interpreter will always start off by looking within its own local variables. If the variable isn't found, the search will continue looking up what is called the scope chain

// Example:
function one() {
  two();
  function two() {
    three();
    function three() {
      // function three's code here
    }
  }
}

one();
