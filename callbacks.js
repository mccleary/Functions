/*jshint esversion: 6 */

// Callbacks (A function that is passed as an argument to another function)
 

//Example:
function each(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      console.log(array[i]);
    }
  }
}

function isPositive(n) {
  return n > 0;
}


each([-2, 7, 11, -4, -10], isPositive);

// 7, 11
