/*jshint esversion: 6 */

// Higher-Order Functions (A function that returns another function)
// Further Research: https://en.wikipedia.org/wiki/First-class_function

// example:
function alertThenReturn() {
  alert('Message 1!');

  return function () {
    alert('Message 2!');
  };
}

// when invoked in the browser, only see alert 'message 1'
// to see alert 'message 2', assign a variable to to that return value:
const innerFunction = alertThenReturn();

// Now use the innerFunction variable like any other function:
innerFunction();
// alerts 'Message 2!'

//  this function can be invoked immediately without being stored in a variable, just add another set of ()
alertThenReturn()();
// alerts 'Message 1!' then alerts 'Message 2!'


// Example:
/*
Declare a function named `higherOrderFunction` that takes no arguments,
and returns an anonymous function.

The returned function itself takes no arguments as well, and simply
returns the number 8.
*/
function higherOrderFunction() {
    return function() {
        return('8');
    };
}

higherOrderFunction()();
