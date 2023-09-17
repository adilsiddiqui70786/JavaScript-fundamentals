// Array Methods 
// forEach , map , filter , some , every , reduce

// These function use callback as a input

/* forEach

   arr.forEach(some function definitioon or name)

   // Example

   
let arr = [1, 2, 3, 4, 5];

function print(el) {
    console.log(el);
}

arr.forEach(print);

// OR

arr.forEach(function(el) {
    console.log(el);
});

*/


let arr = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];

arr.forEach((el) => {
   console.log(el)  
});

arr2.forEach(function(el){
     console.log(el);
});

let arr3 = [
    {
        name: "Nidhi",
        marks: 87
    },
    {
        name: "Shii",
        marks: 66
    },
    {
        name: "Mayank",
        marks: 76
    }
]

// to print marks for every object in array

arr3.forEach((student) => {
     console.log(student.marks)
});

/* Map: Let newArr = arr.map(some function definiton or name)
It is same as forEach but just store in the new array with same size

// Example -
 let num = [1, 2, 3, 4,];
 let double = num.map(function(el){
    return el*2;
 });
*/

let students = [
    {
        name: "Nidhi",
        marks: 87
    },
    {
        name: "Shii",
        marks: 66
    },
    {
        name: "Mayank",
        marks: 76
    }
]

let gpa = students.map((el) => {
      return el.marks/10;
});


/* Filter: let newArr = arr.filter(some function definiton or name)

let nums = [2, 4, 5, 2, 7, 8, 9];

let even = num.filter ((num) => (num % 2 == 0));

*/

let nums = [2, 4, 5, 2, 7, 8, 9];

let ans = nums.filter((el) => {
    return el % 2 == 0;  // even -> true 
    return el < 5;
});

/* Every: Returns true if every element of arry
          gives true for some function. Else return false.

          arr.every(some difinition or name);

          [1, 2 ,3, 4].every((el) => (el%2 == 0));
          false
          
          [2,4].every((el) => (el%2 == 0));
          true
*/

/* Some: Returns true if some element of arry
          gives true for some function. Else return false.

          arr.some(some difinition or name);

          [1, 2 ,3, 4].some((el) => (el%2 == 0));
          true
          
          [1, 3].every((el) => (el%2 == 0));
          false
*/

/* Reduce: Reduces the array to a single value
   arr.reduce(reducer function with 2 variable for (accumulator, elemen));

*/

// Example :
  
let numbers = [1, 2, 3, 4];
let finalvalue = numbers.reduce((res, el) => (res + el));
console.log("total numbers of value = " +finalvalue);


// Finding Maximum in an array

let numz = [2, 3, 4, 5, 6, 7, 8, , 1 , 2];

let result = numz.reduce((max, el) => {
    if(el > max){
        return el;
    } else {
        return max;
    }
});


// Practice Ques

// Check if all numbers in our array are multiples of 10 or not.

let = allnum = [20, 30, 50, 30, 40];

 let answer = allnum.every((el) => el % 10 == 0);

 console.log(answer);


// Create a function to find the min number in an arry

let newArray = [4, 5, 4, 6, 2 , 7];

let min = newArray.reduce((min , el) => {
      if(min < el) {
        return min;
      } else {
        return el;
      }
});

console.log(min);

function getMin(){
    let min = newArray.reduce((min , el) => {
        if(min < el) {
          return min;
        } else {
          return el;
        }
  });

  return min;
}


/* Default Parameters: given a default value to the argument
    
    function func(a , b =2) {
        //do something
    }
*/

// Example

function sum(a, b=5){
    return a+b;
}

sum(2); //5


/* Spread: Expands an iterable into multiples values
   
    function func(...arr) {
        // do something
    }

    */

    //Example - normal
    Math.min(1, 2, 4, 5, 6 ,3 ,2 ,3 ,3 ,4) //1

    // with spread we don't have to write every element we store in arry and then pass ...arrayname with function

    let arr5 = [1, -3, 5, 2, 45, 7 ,32 ,2 ,2, 34,4 , 3 ];
    arr5.push(-7);
    Math.min(...arr5);  //-7
    Math.max(...arr5);  //45


    console.log(..."mohdAdil")

    /* Spread: with Array literals

    let arr = [2, 4, 3, 5 , 6];
    <. undefined

    let newArr = [...arr];

    newArr
    > (5) [2, 4, 3, 5, 6];

    >let chars =[..."Mohd Adil"];
    undefined
    >chars
     <. (9) ['M', 'o', 'h', 'd', ' ', 'A', 'd', 'i', 'l'] */

     let odd = [1, 3, 5, 7, 9];
     let even = [2, 4, 6, 8, 10];

     let oddeven = [...odd, ...even];
     console.log(oddeven);

     // Spread: with object literals

     /*
      let data = {
        email: pma143@gmail.com ,
        password: "abcdef",
     };

     let dataCopy = {...data, id: 123};
     
     */

   const data = {
    email: "pma143@gmail.com",
    password: "abcdef",
   };

   const dataCopy ={...data, id: 123, country:  "Mergia"};

   /* 
   
    Rest concept is totally opposite the concept of Spread.
    Rest: Allows a funxction to take an indefinite number of 
            arguments and bundle them in an array

    // Example :

    function sum(...args) {
        return args.reduce((add, el) => add + el);
    };

    */

    function sum(...args){
        for(let i = 0; i < args.length; i++){
            console.log("you gave us: " ,args[i]);
        }
    } 

    function sum(...args) {
          return args.reduce((sum , el) => sum + el)
    }

    function mini(...args) {
        return args.reduce((min, el) => {
           if(min > el){
            return el;
           }  else {
            return min;
           }
        });
    }



    /* Destructuring: Storing values of array into multples variables

    let names = ["Dhoni", "Kohli", "Rohit", "Shikhar"];
    let [winner, runnerup] = names;
    console.log(winner, runnerup); //Dhoni , kohli

    */

    let contestant = ["Elvish yadav", "Abhishek Malhan", "Manisha Rani", "Bebike", "PoojaBhatt", "Avinash", "Jiya"];

    let [winner , runnerup , secondrunnerup, ...others] = contestant;

    // Desturcturing with objects

    let student2 = {
        name: "Mayank Singh",
        age: 21,
        class: 15,
        subject: ["computer Graphics", "ADBMS" , "Embeded System"];
        username: "mayankAu4",
        password: "priyanshii"
    }

    let { username: user, password: pass, city: place = "Mumbai"} = student2;
