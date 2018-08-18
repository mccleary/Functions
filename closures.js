/*jshint esversion: 6 */

// Closures (The process of a function retaining access to its scope)


//Example:
function remember(number) {
    return function() {
        return number;
    }
}

const returnedFunction = remember(5);

console.log( returnedFunction() );
// 5
