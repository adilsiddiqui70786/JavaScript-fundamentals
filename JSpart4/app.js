//For loop

//forward
for(let i = 1; i<=10; i++) {
    console.log(i);  //Print 1 from 10
}

//Backward

for(i = 10; i>=1; i--){
    console.log(i);  // Print 10 to 1
}

//Print All odd numbers(1 to 15)

console.log("Forwards");

for(let i =1; i <= 15; i = i+2){
    console.log(i);
}

console.log("Backwards");

for(let i = 15; i >= 1; i = i-2){
    console.log(i);
}

// Print All Even Numbers from 2 to 10
console.log("Even Numbers")
for(let i = 2; i <= 10; i=i+2) {
    console.log(i);
}

//Print Multiplication table for 5

// console.log("Table of 5");

// for(let i = 5; i<=50; i= i+5){
//     console.log(i);
// }


//Table from User
console.log("Tables");

let n = prompt("Write you number");
n = parseInt(n);

for(let i = n; i<=n*10; i=i+n){
    console.log(i);
}


//Nested LOOP

console.log("Nested LOOP");

for(let i = 1; i<=3; i++){
    console.log(`outer loop ${i}`);
    for(let j=1; j<=3; j++){
        console.log(j);
    }
}

