// let student1 = "Nidhi";
// let student2 = "Priyanshii";
// let student3 = "Mayank";

let students = ["Mayank", "Priyanshii", "Nidhi", "Adil"];
console.log(students.length);  //4
console.log(students);         //All elements
console.log(students[0]);      //Mayank


let marks = [78 , 87 , 76 , 67, 100];
console.log(marks);

//mixed Array

let info = ["Adil", 19, 78.9];

//Empty Array

let Array = [];

console.log(students[2][2]);    //d

console.log(students[1].length);

students[4] = "Shraddha"  // Add Shraddha in 4th index of elemnet
console.log(students);   

students[7] = 45;
console.log(students);    // It say 6&7 are empty


//Array metods


//Adding in End using push
let cars = ["Audi", "Vagnor", "Maruti", "BMW"];
console.log(cars);
cars.push("Toyota"); //It add in last
console.log(cars);


//Deleting from end using pop
let flowers = ["Rose", "Lotus", "lili", "Dahilia"];
console.log(flowers);
flowers.pop();
console.log(flowers);

//Add to Start using Unshift

flowers.unshift("Jasmine");
console.log(flowers);

//Delte from Start

cars.shift();
console.log(cars);

// Blocked And Delete from followers List

let followers = ["ram" , "sahil" , "kiya"];
console.log("Before Blocked",followers);
let Blocked = followers.shift();
console.log("After Blocked ",followers)


//More Methods

let color = ["red", "Blue", "yello"];
color.indexOf("Blue");             //1

//Include for true and false as -1 and value 1 , 2 ,3

color.includes("red");     //true



//Conactenation an array and reverse method 


//Reverse an Array 
let num = [1 , 2 , 3 ,4, 5];
console.log(num.reverse());

let primary = ["red", "Blue", "yellow"];
let secondary = ["green, pink, orange"];

let bothcolor = primary.concat(secondary);
console.log(bothcolor);


//Slice    slice(start, end)

let pen = ["elkon", "gel", "dot"];

pen.slice(2);  // dot
pen.slice(pen.length-2);  //gel , dot
pen.slice(0, 2)  // ['elkon', 'gel']
pen.slice(5);  // [] empty array

pen.slice(-1); // dot


// Splice - change in original Array whether slice copies

let colors = ["red" , "green" , "white", "black"];

/* 

colors.splice(3);
['black']

colors
(3) ['red', 'green', 'white']

colors
(3) ['red', 'green', 'white']

colors.splice(6);
[]

colors.splice(2);
['white']

colors.splice(0);
(2) ['red', 'green']

colors
[]


colors.splice(0 , 2 , "red" , "green", "white");
[]
colors
(3) ['red', 'green', 'white']

colors.splice(0);  // rempve all
(3) ['red', 'green', 'white']
colors
[]
colors.splice(0 , 2 , "red" , "green", "white");
[]
colors
(3) ['red', 'green', 'white']

colors.push("grey","black");
5

colors
(5) ['red', 'green', 'white', 'grey', 'black']


*/



//Practice Qs

// Qs - For the given start state of an array, change it to final form using splice.

// start: ['january', 'july' , 'march', 'august']
// final: ['july', 'june' , 'march', 'august']

let start = ['january', 'july' , 'march', 'august'];
start.splice(0, 2, "july", "june");
console.log(start);


let lang = ["c", "c++", "html", "sql", "javaScript", "python", "java", "c#"];
lang.reverse().indexOf("javaScript");
console.log(lang);


// Array References  - Address in memory

let arr = ['a', 'b', 'c', 'd' ];
let arrcopy = arr;

//Now both arrays are same 

arr == arrcopy; //true

arr.push('e');  //It chnages in both arr and arrycopy as it same 

console.log(arr);
console.log(arrcopy);

arrcopy = ['a', 'b', 'c'];  //Now both arr and arrcopy is differrnt due to assign a new address


arr == arrcopy; //false


//constant Arrays

const arrt = [1, 2 ,3];
arr.push(4);

//Nested Arrays or Multi dimenstional Array

let numbers = [[1, 2, 5 ,7], [2, 3], [3, 4]];

// There are three arrays in numbers and array has array

numbers[0];  // [1, 2, 5 ,5]
numbers[0][2];  //5

//Practice Qs tic tac toe

let game = [['x', null , 'O'], [null, 'X', null], ['O', null, 'X']];
console.log(game);