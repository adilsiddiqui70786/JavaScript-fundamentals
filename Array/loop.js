// // let fruits = ["Mango", "Orange", "Pineapple", "Litchi", "Guava", "Banana"];
// // fruits.push("pomegranate");
// // //Forwards

// // for(i=0; i<fruits.length; i++) {
// //     console.log(i , fruits[i]);
// // }

// // console.log("Backwards:");

// // for(i=fruits.length-1; i>=0; i--) {
// //     console.log(i , fruits[i]);
// // }

// //Nested Loop With Nested Arrays :

// // let heroes = [
// //     ["ironman", "spiderman", "thor"],
// //     ["SRK", "Salman", "Amir"]
// // ];

// for(let i=0; i<heroes.length; i++) {
//     console.log([i], heroes[i]);
//     for(j=0; j<heroes[i].length; j++){
//         console.log(`j=${j}, ${heroes[i][j]}`);
//     }
// }


// let students = [
//     ["priyanshii", 96],
//     ["mayank", 98],
//     ["Adil", 80]
// ];

// for(let i=0; i<students.length; i++) {
//     console.log(`Info of students #${i+1}`)
//     for(let j=0; j<students[i].length; j++){
//         console.log(students[i][j]);
//     }
// }

// //For Of Loop

// let fruits = ["Mango", "Orange", "Pineapple", "Litchi", "Guava", "Banana"];
// for(fruit of fruits) {
//     console.log(fruit);
// }

// for (char of "apnapmalove") {
//     console.log(char);
// }


// //for loop for Nested Arrays

let heroes = [
    ["ironman", "spiderman", "thor"],
    ["SRK", "Salman", "Amir"]
];

for(list of heroes){
    for(name of list){
        console.log(name);
    }
}