/*jshint esversion: 6 */

// Array Methods: forEach(), map(), filter()
// More info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype


// forEach() - takes in a callback function & invokes that function for each element in the array. forEach() allows you to iterate through an array, similar to using a for loop.

// More info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

array.forEach(function callback(currentValue, index, array) {
    // function code here
});


// Using this example:
function logIfOdd(n) {
  if (n % 2 !== 0) {
    console.log(n);
  }
}

logIfOdd(2);
// (nothing is logged)

logIfOdd(3);
// 3


// example 1: using an forEach() method
[1, 5, 2, 4, 6, 3].forEach(function logIfOdd(n) {
  if (n % 2 !== 0) {
    console.log(n);
  }
});

// 1
// 5
// 3


// example 2: written using an anonymous function:
[1, 5, 2, 4, 6, 3].forEach(function (n) {
  if (n % 2 !== 0) {
    console.log(n);
  }
});

// 1
// 5
// 3


// example 3: if function is already defined, you can write as:
[1, 5, 2, 4, 6, 3].forEach(logIfOdd);

// 1
// 5
// 3




// -----------------------------------------------------------------------------
// *****************************************************************************
// -----------------------------------------------------------------------------


// map() - similar to forEach() in that it invokes a callback function for each element in an array. However, map() returns a new array based on what's returned from the callback function.

// More info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

// Example:
const names = ['David', 'Richard', 'Veronika'];
// pass in anonymous function as an argument
names.map(function(name) {
  return name.length;
});
// store new array in a variable
const nameLengths = names.map(function(name) {
  return name.length;
});
// [5, 7, 8]


// Example 2:
const musicData = [
    { artist: 'Adele', name: '25', sales: 1731000 },
    { artist: 'Drake', name: 'Views', sales: 1608000 },
    { artist: 'Beyonce', name: 'Lemonade', sales: 1554000 },
    { artist: 'Chris Stapleton', name: 'Traveller', sales: 1085000 },
    { artist: 'Pentatonix', name: 'A Pentatonix Christmas', sales: 904000 },
    { artist: 'Original Broadway Cast Recording',
      name: 'Hamilton: An American Musical', sales: 820000 },
    { artist: 'Twenty One Pilots', name: 'Blurryface', sales: 738000 },
    { artist: 'Prince', name: 'The Very Best of Prince', sales: 668000 },
    { artist: 'Rihanna', name: 'Anti', sales: 603000 },
    { artist: 'Justin Bieber', name: 'Purpose', sales: 554000 }
];

const albumSalesStrings = musicData.map(function(data) {
    return data.name + " by " + data.artist + " sold " + data.sales + " copies";
});
console.log(albumSalesStrings);

/* [ '25 by Adele sold 1731000 copies',
   'Views by Drake sold 1608000 copies',
   'Lemonade by Beyonce sold 1554000 copies',
   'Traveller by Chris Stapleton sold 1085000 copies',
   'A Pentatonix Christmas by Pentatonix sold 904000 copies',
   'Hamilton: An American Musical by Original Broadway Cast Recording sold 820000 copies',
   'Blurryface by Twenty One Pilots sold 738000 copies',
   'The Very Best of Prince by Prince sold 668000 copies',
   'Anti by Rihanna sold 603000 copies',
   'Purpose by Justin Bieber sold 554000 copies' ]
*/




// -----------------------------------------------------------------------------
// *****************************************************************************
// -----------------------------------------------------------------------------


// filter() -  similar to the map() method:
// * called on an array
// * takes a function as an argument
// * returns a new array
//
// The difference is the function passed to filter() is used as a test, and only items in the array that pass the test are included in the new array.

// More info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// Example 1:
const names = ['David', 'Richard', 'Veronika'];
// pass in a function as an argument
const shortNames = names.filter(function(name) {
  return name.length < 6;
});
// called on each item in the name array, the stored in the name variable
// filter checks the length of the name, if it's greater than 6, it's skipped & not included in the new array. If less than 6, name.length is true and name is included in the new array.
console.log(shortNames);
// ['David']



// Example 2:
/* Using filter():
 *   - Return only album objects where the album's name is
 *     10 characters long, 25 characters long, or anywhere in between
 *   - Store the returned data in a new `results` variable
 */

const musicData = [
    { artist: 'Adele', name: '25', sales: 1731000 },
    { artist: 'Drake', name: 'Views', sales: 1608000 },
    { artist: 'Beyonce', name: 'Lemonade', sales: 1554000 },
    { artist: 'Chris Stapleton', name: 'Traveller', sales: 1085000 },
    { artist: 'Pentatonix', name: 'A Pentatonix Christmas', sales: 904000 },
    { artist: 'Original Broadway Cast Recording',
      name: 'Hamilton: An American Musical', sales: 820000 },
    { artist: 'Twenty One Pilots', name: 'Blurryface', sales: 738000 },
    { artist: 'Prince', name: 'The Very Best of Prince', sales: 668000 },
    { artist: 'Rihanna', name: 'Anti', sales: 603000 },
    { artist: 'Justin Bieber', name: 'Purpose', sales: 554000 }
];

const results = musicData.filter(function(data) {
    return (data.name.length >= 10) && (data.name.length <= 25);
});

console.log(results);

/* [ { artist: 'Pentatonix',
    name: 'A Pentatonix Christmas',
    sales: 904000 },
  { artist: 'Twenty One Pilots',
    name: 'Blurryface',
    sales: 738000 },
  { artist: 'Prince',
    name: 'The Very Best of Prince',
    sales: 668000 } ]
*/    
