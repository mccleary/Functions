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
// Hello there! I'm Andrew.




// apply() Example 6:
const andrew = {
  name: 'Andrew'
};

function introduce(language) {
  console.log(`I'm ${this.name} and my favorite programming language is ${language}.`);
}

// Write an expression that uses the call() method to produce the message: 'I'm Andrew and my favorite programming language is JavaScript.'

introduce.call(andrew, 'JavaScript');





//Callbacks and this
function invokeTwice(cb) {
   cb();
   cb();
}

const dog = {
  age: 5,
  growOneYear: function () {
    this.age += 1;
  }
};

dog.growOneYear();
// (this works as expected)

dog.age;
// 6

invokeTwice(dog.growOneYear);
// undefined

dog.age;
// 6

//One way to resolve this issue is to use an anonymous closure to close over the dog object:
invokeTwice(function () {
  dog.growOneYear();
});

dog.age;
// 7

//better to use bind()



// ------------------------------------------------------------- //

// bind()

//Similar to call() and apply(), the bind() method allows us to directly define a value for this. bind() is a method that is also called _on_ a function, but unlike call() or apply(), which both invoke the function right away -- bind() returns a new function that, when called, has this set to the value we give it.

// bind() Example 1:
function invokeTwice(cb) {
   cb();
   cb();
}

const dog = {
  age: 5,
  growOneYear: function () {
    this.age += 1;
  }
};

const myGrow = dog.growOneYear.bind(dog);

dog.age;
// 7





// bind() Example 2:
const driver = {
  name: 'Danica',
  displayName: function () {
    console.log(`Name: ${this.name}`);
  }
};

const car = {
  name: 'Fusion'
};

// Write an expression using bind() that allows us to "borrow" the displayName() method from driver for the car object to use

driver.displayName.bind(car);
