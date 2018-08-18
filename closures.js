/*jshint esversion: 6 */

// Closures (The process of a function retaining access to its scope. The combination of a function and the lexical environment within which that function was declared.)
// More info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures


//Example 1:
function remember(number) {
    return function() {
        return number;
    }
}

const returnedFunction = remember(5);

console.log( returnedFunction() );
// 5




//Example 2:
const number = 3;

function myFunction () {
  const otherNumber = 1;

  function logger() {
    console.log(otherNumber);
  }

  return logger;
}

const result = myFunction();

result();
// 1




//Example 3:
function outerFunction() {
  let num1 = 5;

  return function(num2) {
    console.log(num1 + num2);
  };
}

let result = outerFunction();

result(10);
// 15




//Example 4:
function myCounter() {
  let count = 0;

  return function () {
    count += 1;
    return count;
  };
}

let counter = myCounter();

counter();
// 1

counter();
// 2

counter.count;
// undefined

count;
// undefined




//Example 5:

/*
Declare a function named `expandArray()` that:
* Takes no arguments
* Contains a single local variable, `myArray`, which points to [1, 1, 1]
* Returns an anonymous function that directly modifies `myArray` by
  appending another `1` into it
* The returned function then returns the value of `myArray`
*/
function expandArray() {
    let myArray = [1, 1, 1];

    return function() {
        myArray.push(1);
        return myArray;
    };
}

let array = expandArray();

array();
// [1, 1, 1, 1]
