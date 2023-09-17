
// Creating Object literals -:





// const student = {
//     name: "Nidhi",
//     age: 23,
//     marks: 9.9,
//     city: "bihar"
// };

// const item = {
//     price: 105,
//     discount: 50,
//     colors: ["red", "green"]
// };


// //Thread / Twitter Post
// //Creating an object literal for the properties of thread/Twitter post which includes -:

// const thread = {
//     username: "@Saif4982khan",
//     content: "People have two sides",
//     likes: 675,
//     repost: 56,
//     tags: ["instagram", "AdilSiddiqui", "Saif"]
// };

// console.log(thread.content);

// /*

//  Get Values -:

//     Js automatically coverts object keys to srting.
//     Even if we made the number as a key, the number will be converted to string.


// */
  
// //Example -:
// const obj = {
//     1: "a",
//     2: "b",
//     3: "c",
//     true: "d",
//     null: "e",
//     undefined: "f"
// };

// console.log(obj[null]);  // 'e' it converts null as a strings


//   /*

//      Add/Update Value 

//        - Change the city to "mumbai"
//        - Add a new property, gender: "Female"                      
//        - Change the marks to "A"

// */
// // Exp -: 

// const girl = {
//     name: "nidhi",
//     age: 14,
//     marks: 9.9,
//     city: "bihar"  
// };

// // girl.city  // 'bihar'
// // to chnage city 
// girl.city = "mumbai";

// //Assign a new properties -
// student.gender = "female";

// // girl marks in array . changed nu,ber in strings

// girl.marks = [45, 89, 87];


// // Delete key pair -

// delete girl.marks;

// /**
//  * Objects of Objects
//  * 
//  * storing information of multiple students
//  */

// //Exp -:

// const classInfo = {
//     nidhi: {
//         grade: "A+",
//         city: "bihar"
//     },
//     priyanshi: {
//         grade: "O",
//         city: "Allahabad"
//     }
// };

// classInfo.nidhi.city = "Allahabad";  //change city


// /*

//   - Array of Objects

//   storing informstion of multiple student
// */

// //Exp

// const classInfo2 = [

//     {
//         name: "Aman",
//         grade: "O",
//         city: "nihar"
//     },
//     {
//         name: "karan",
//         grade: "A+",
//         city: "nihar"
//     }
// ];

// /*
//  Math Object

//  properties      Methods

//   Math.PI        Math.abs(n)
//   MAth.E         Math.pow(a,b)
//                  Math.floor(n)   nearest smallest Int value
//                  Math.ciel(n)
//                  Math.random()

               
// */

//  //Exp

//  Math        //Math Methods
//  Math.PI
//  Math.abs(-12);   //12   Chnage into positive

//  Math.pow(2,3);  //8 power of 2 di power 3
//  Math.floor(5.5)  //Round off exp -      Math.floor(n)   nearest smallest Int value


//  Math.Random();    //Random value b/w 0 to 1  // never 1


//  /*random Integers
//  From 1 to 10

//  Step:1 let num = MAth.random();   // 0.36638282292

//  Step2: num = num*10;   // 4.64774131812704

//  Step:3 num = Math.floor(num);
//  //4

//  Step:4 num = num+1
//  //5

// */

// // let num = Math.random();

// // let num2 = num * 10;

// // let num3 = Math.floor(num2);

// // Math.random();
// // Math.random() * 10;

// // Math.floor(Math.random() * 10);  // 0 to 9

// // Math.floor(Math.random() * 10) + 1;  // 1 to 10 now


// //Summarize in one

// let random = Math.floor(Math.random() * 10) + 1;

// let random2 = Math.floor(Math.random() * 100) + 1;


//Practice Qs : 1 Create a program that generates a random number representing a dice roll
// [The number should be between 1 to 6].

let dice = Math.floor(Math.random() * 6) +1;
console.log(dice);


// Practice Qs : 2 Create an object representing a car that stores the following properties for the 
// car: name , model, color.
// Print the car's name.

const car = {
    name: "prosche",
    model: "911 Targa 4S",
    color: "black"
};
console.log(car.model);

// Practice QS : 3

/*
Create an object Person with thier name , age and city .
Edit their city's original value to change it to "New York".
Add a new property country and set it to the United States.
 */

const Person = {
    name: "Mayank Singh",
    age: 20,
    city: "JaunPur"
};

Person.city = "Allahabad";
Person.country = "India";
console.log(Person);