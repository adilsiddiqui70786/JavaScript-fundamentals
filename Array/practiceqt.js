// Question 1- Write a JavaScript program to get the first n elements of an array.

let num = [8, 9, 12, 7, -5];
let n = 4;
let pn = num.slice(0, n);
console.log(pn);

//Question 2 - Write a JavaScript program to get the last n elements of an array.

let array = [7 , 9 , 0 , -3];
n = 3;
let ans = array.slice(array.length-n);

//Question 3 - Write a javaScript program to chech whether a string is blank or not.

let string = []

if (string.length == 0){
    console.log("String is empty");
} else {
    console.log("string is not empty");
}

// Or

let str = prompt("Enter a String");

if (str.length == 0){
    console.log("String is empty");
} else {
    console.log("string is not empty");
}


//Question - 4  Write a JavaScript program to test whether the charchter at a given index is lower case ?

let char = "ApNaCollege";
let indx = 4;

if(char[indx] == char[indx].toLowerCase()) {
    console.log("Character is lowerCase");
} else {
    console.log("character is not lowerCase");
}

let str1 = "ApNaCoLlEgE";
let idx = 3;
if(str1[idx] == str1[idx].toLowerCase()){
    console.log("characterislowercase");
}else{
    console.log("characterisnotlowercase");
}

//Question 5 Write a java program to strip leading and trailing spaces from a string.

let str2 = prompt("Please Enter a String");
console.log(`Original String = ${str2}`);
console.log(`after strip leading and trailing = ${str2.trim()}`);


// Question 6 - Program to Check if an element exists in array or not.

let arr = [5 , 5 , 23, "hello", 'a', -5];
let item = 5;

if (arr.indexOf(item) != -1) {
    console.log("Element Exist in an array");
} else {
    console.log("Element does not exists in array");
}


const array2 = [1, 3, 5, 7, 9];
const elementToFind = 5;

if (array2.includes(elementToFind)) {
  console.log(`Element ${elementToFind} exists in the array.`);
} else {
  console.log(`Element ${elementToFind} does not exist in the array.`);
}
