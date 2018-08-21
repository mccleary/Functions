/*jshint esversion: 6 */

// Setting your own 'this' using call(), apply(), and bind() methods

// More info:
// call() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call

// apply() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply

// bind() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind


// ------------------------------------------------------------- //

// call() Example 1:
function multiply(n1, n2) {
  return n1 * n2;
}

multiply(3, 4);
// 12

// using the call() method
multiply.call(window, 3, 4);
// 12



// call() Example 2:
const mockingbird = {
  title: 'To Kill a Mockingbird',
  describe: function () {
    console.log(`${this.title} is a classic novel`);
  }
};

mockingbird.describe();
// 'To Kill a Mockingbird is a classic novel'

// Using call(), the following pride object can utilize mockingbird's describe() method:
const pride = {
  title: 'Pride and Prejudice'
};

mockingbird.describe.call(pride);
// 'Pride and Prejudice is a classic novel'



// ------------------------------------------------------------- //

// apply() Example 1:
function multiply(n1, n2) {
  return n1 * n2;
}
// We used call() and passed in arguments individually:
multiply.call(window, 3, 4);
// 12

// Using apply(), collect all of the multiply() function's arguments in an array! Then, pass that entire array into apply():
multiply.apply(window, [3, 4]);
// 12

// Note that the first argument in both call() and apply() is still window (i.e., the object to bind the value of this to)




// apply() Example 2:
const mockingbird = {
  title: 'To Kill a Mockingbird',
  describe: function () {
    console.log(`${this.title} is a classic novel`);
  }
};

const pride = {
  title: 'Pride and Prejudice'
};

mockingbird.describe.apply(pride);
// 'Pride and Prejudice is a classic novel'

// only difference between mockingbird.describe.call(pride); and mockingbird.describe.apply(pride); is just the method! Both approaches produce the same result.



// apply() Example 3:
const cat = {
	name: ‘Bailey’;
}

function sayHello(message) {
	console.log(‘${message}, ${this.name}’);
}

sayHello.call(cat, ‘Nice to see you’);
// Nice to see you, Bailey

sayHello.apply(cat, [‘Hello’]);
// Hello, Bailey



// apply() Example 4:
const dave = {
  name: 'Dave'
};

function sayHello(message) {
  console.log(`${message}, ${this.name}. You're looking well today.`);
}

sayHello.apply(dave, ['Hello']);
// Hello, Dave. You're looking well today.



// apply() Example 5:
const Andrew = {
  name: 'Andrew',
  introduce: function () {
    console.log(`Hi, my name is ${this.name}!`);
  }
};

const Richard = {
  name: 'Richard',
  introduce: function () {
    console.log(`Hello there! I'm ${this.name}.`);
  }
};
Richard.introduce.call(Andrew);
// 'Hello there! I'm Andrew.'
