/* Call Stack 
  

*/

// function hello() {
//     console.log("iinside hello fnx");
//     console.log("hello!");
// }

// // hello();  //call 

// // stack - last in first out

// function demo() {
//     console.log("calling hello fnx");
//     hello();
// }

// console.log("calling demo fnx");
// demo();

// console.log("done, bye!")

/* Visualizing the call stack */

/*  function one() {
    return 1;
}

function two() {
    return one() + one();
}

function three() {
    let ans = two() + one();
    console.log(ans);
}

// three();  // 3

setTimeout(() => {
    console.log("Apna College");
}, 2000);
setTimeout(() => {                       //Asynchronus nature
    console.log("How is i?");
}, 2000);

console.log("hello");  */


h1 = document.querySelector("h1");

function changeColor(color, delay) {
   return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("color changed")
        }, delay)
    })
}

// changeColor("red", 1000, () => {
//     changeColor("orange", 1000, () => {
//         changeColor("yellow", 1000, () => {
//               changeColor("blue", 1000);
//         });
//     });
// });

/* Callback nesting -> callback Hell */

// changeColor("red", 1000);
// changeColor("green", 2000);
// changeColor("yellow", 3000);

// function savetoDb(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if(internetSpeed > 4){
//         success();
//     } else {
//         failure();
//     }
// }

// savetoDb(
//     "Mohd Adil" , 
//     () => {
//         console.log("Suceess: your data was saved");
//         savetoDb(
//             "Hellow World",
//             () => {
//                 console.log("Success2: data2 saved");
//             savetoDb(
//                 "Mayank Singh",
//                 () => {
//                     console.log("success3, data3 saved");
//                 }, 
//                 () => {
//                     console.log("Failure3, weak connection");
//                 }
//             );
//     }, 
//     () => {
//         console.log("Failure2: weak connection");
//     }
// );
//     }, 

//     () => {
//           console.log("Failure, weak connection data was not saved.")
//     }
// );



// Promises : Resolve or Reject
 // Methods: then() use if fullfill......     catch() if reject


/* function savetoDb(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            resolve("success: data was saved!");
        } else {
            reject("Failure: weak connection!")
        }
    });
}


savetoDb("Mohd Adil") // req = promise object
 .then((result) => {
    console.log("data1 saved.");
    console.log("result of promise:", result);
    return savetoDb("hello World");
})
 .then((result) => {
    console.log("data2 saved.");
    console.log("result of promise:", result);
    return savetoDb("Mayank Singh");
 })
 .then((result) => {
    console.log("data3 saved");
    console.log("result of promise:", result);
 })
 .catch((error) => {
    console.log("promise was rejected");
    console.log("error of promise:", error);
}); */

