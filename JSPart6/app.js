// function hello() {
//     console.log("hello");
// }

// We have to call the function to use 


// hello();   // we can multiples time

// function printName() {
//     console.log("Mohd Adil");
//     console.log("University of Allahabad");
// }

// printName();   

// We can use loop in function -

// function print1To5() {
//     for(let i = 1; i<=5; i++) {
//         console.log(i);
//     }
// }

// print1To5();


// We can use If Else statement in function

// function isAdult() {
//     let age = 17;
//     if(age >= 18) {
//         console.log("Adult");
//     } else{
//         console.log("not Adult");
//     }
// }

// isAdult();

// //Practice Qs - Create a function that prints a poem.

// function printPoem() {
//     console.log("Twinkle Twinkle, little Star");
//     console.log("How I wonder what you are !");
// }

// printPoem();

// //Practice Qs - Create a function to roll a dice & always display the value of the dice(1 to 6).

// function ludo() {
//    let random = Math.floor(Math.random() * 6) +1;
//    console.log(random);
// }

// ludo();


// //FUnction Argument

// function printName(name) {     // Single argument - value - name
//     console.log(name);
// }

// printName("Nidhi Singh");



// // we can give multiple arguments

// function printInfo(name, age) {   
//     console.log(`${name}'s age is ${age}`);
// }

// printInfo("Adil");
// printInfo("Nidhi", 14);
// printInfo("Priyanshii", 19);
// printInfo("Mayank", 21);

// function sum(a, b){
//     console.log(a+b);
// }

// sum(1, 3);

// //Practice Qs 
// // Create a Function that gives us the average of 3 numbers.

// function calcAvg(a, b, c) {
//     let avg = (a+b+c)/3;
//     console.log(avg);
// }

// calcAvg(6, 4 ,2);
// calcAvg(6, 4 ,6);

// // practice Qs 
// // Create a Function that prints the multiplication table of a number -

// function PrintTable(n) {
//     for(let i=n; i<=n*10; i+=n){
//         console.log(i);
//     }
// }

// PrintTable(4);

//Return keyword

function sum(a, b) {
    return a+b;
}


console.log(sum(5,8));
console.log(sum(sum(5,8), 5));

function isAdult(age) {
    if(age >= 18){
        return "Adult";
    } else {
        return "not Adult";
    }
}

// Create a function that returns the sum of nmbers from 1 to n.

function getSum(n) {
    let sum = 0;
    for(let i=1; i<=n; i++){
        sum+=i;
    }
    return sum;
}

let str = ["hi" , "hello", "how are you"];

function concat(str) {
    let result = "";

    for(let i=0; i<str.length; i++){
        result += str[i];
    }

    return result;
}


const calculator = {
    add(a , b) {
        return a+b;
    },
    sub(a , b) {
        return a-b;
    },
    mul(a , b) {
        return a*b;
    }
}


// Practice Qs - 1 Write a JavaScript function that returns array elements larger than a number

let arr = [8, 9, 10 , 11, 1, 2, 3, 4, 5, 6, 7];
let num = 5;

//elements larger than a number num


function getElements(arr, num) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > num) {
            console.log(arr[i]); // 8,9,10,11,6,7
        }
    }
}

getElements(arr, num);

// Practice 2 - Write a JS functin to extract unique Characters from a string.
// Example str = "abcdabcdefgggh"  
   //    ans = "abcdefgh"


let string = "abcdabcdefgggh";   

//Function to get String with all unique elements -
function extractUnique(str) {
    let ans = "";

    for (let i = 0; i < str.length; i++) {
        let currChar = str[i];
    }

    if (ans.indexOf(currChar) == -1) {
        // if current character is not added, then add it in ans.

        //Otherwise it is a dupluicate.
           ans += currChar;
    }

    return ans;
}

extractUnique(string);


let country = ["Australia", "Germany", "United States of America"];

function longestName(country) {
    let ansIdx = 0;
    for (let i = 0; i < country.length; i++) {
        let ansLen = country[ansIdx].length;
        let currLen = country[i].length;

        if (currLen > ansLen) {
            ansIdx = i;
        }
    }

    return country[ansIdx];
}

longestName(country);

let start = 100;
let end = 200;

function generateRandom(start, end) {
    let diff = end = start;
    return Math.floor(Math.random() * diff) + start;
}