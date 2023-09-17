// This Keyword
// "This" keyword refers to an object that is executing the curreny piece of code.

const student = {
    name: "Mohd Adil",
    age: 20,
    marks: 9.5,
    phy: 87,
    eng: 87,
    math: 97,
    getAvg() {
        let avg = (this.eng + this.phy + this.math) / 3;  //eng+phy+math/3 is wrong bcoz it says they are undefined.
        console.log(avg); 

    }
}


/*  Try and Catch
   The try statement allows you to define a block of code
   to be tested for errors while it is being executed.

   The catch statement allows you to define a block of code to be
   executed, if an error occurs in try block.


   try {
         console.log(a);
   } catch {
     console.log("variable a is not defined");
   }

*/

// Example -

console.log("hello");
console.log("hello");
console.log("hello");

try{
    console.log(a);
} catch(e) {
    console.log("caught an err.. a is undefined");
    console.log(e);
}
console.log("hello");
console.log("hello");
console.log("hello");

// Miscellaneous topics

/* 
  Arrow Functions

  const func = (arg1, arg2..) => {function defintion}

  exmple -

  const sum = (a, b) => {
    console.log(a+b);
  }
*/

const sum = (a, b) => {
    console.log(a+b);
};


const sqr = (n) => {
    return n * n;
};

const pow = (a, b) => {
    return a**b;
};

/* Arrow function-
   Implicit return - when arrow function is work only return only one value.

   const func = (arg1, arg2..) => {value}
*/

const mul = (a, b) => (
    a * b
);

// we can write this sum func

const add = (a, b) => a + b;
const cube = n => n*n*n;



/* Set TimeOut- inbuild function a window object function:

callback - a function which is passed any other function as a argument
timeout - tells that how much time you want to execute that func  takes in mili second 1000ms = 1s



// console.log ("hi there!");

setTimeout( () => {
    console.log("Apna College");
}, 4000);

console.log("welcome to")
*/

console.log ("hi there!");
setTimeout( () => {
    console.log("Apna College")
}, 4000);

console.log("welcome to");

/* 
 Set Interval - same as SetTimeout but execute multiple time after the intervals that we give

*/

let id = setInterval( () => {
    console.log("Adilsiddiqui chrome console")
}, 1000);
console.log(id);

let id2 = setInterval( () => {
    console.log("Welcome here")
}, 3000);
console.log(id2);

setTimeout(() => {
    clearInterval(id);
}, 5000);
setTimeout(() => {
    clearInterval(id2);
}, 4000);
console.log("welcome to");

// to stop - we store in varibale and clearInterval(id_name);



/* this with arrow Function

- homework -

*/


// Practice QS - Write an Arrow function that returns the square of a number 'n'.

const square = n => n*n;
console.log(square(4));

// Write a function that prints "Hello World" 5 times at intervals of 2s each.

let id3 = setInterval (() =>{
    console.log("Hello world");
}, 2000);

setTimeout(() => {
    clearInterval(id3);
    console.log("clear interval ran")
}, 20000);

// Assignment QS- homework