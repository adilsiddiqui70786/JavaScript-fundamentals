
//PQ-1 to delete all occurence of element 'num' in below array

// let arr = [1, 2, 3, 4, 5, 6, 2, 3]
// let num = 2;

// for(let i=0; i<arr.length; i++){
//     if(arr[i] == num){
//         arr.splice(i,1)
//     }
// }
// console.log(arr);



//PQ-2 js programm to find the no of digits in a number.
// if number = 287152 , count 6

// let num = 2876152;
// let count = 0;

// let copy = num;

// while(copy>0) {
//     count++;
//     copy = Math.floor(copy/10);
// }

// console.log(count);

// // --- Second Method

// let number = 28719852;
// let countnum = number.toString().length;

// console.log("Number of digits in the number:", countnum);


//PQ- 3 js programm to find the sum of digits in a number.
// if number = 287152 , sum = 25


// let number=287152;
// let sum=0;
// let copy=number; 
// while(copy>0){
//     digit=copy%10;
//     sum+=digit;
//     copy=Math.floor(copy/10);
// }
// console.log(sum);

//GPT 

// let number = 287152;
// let sum = 0;
// let numStr = number.toString();

// for (let i = 0; i < numStr.length; i++) {
//   sum += parseInt(numStr[i]);
// }

// console.log("Sum of digits:", sum);



//Print the factorial of a number n.

let num = parseInt(prompt("Enter the number to  factorial"));

// parseInt.num(); 

let factorial = 1;

for (let i = 1; i<=num; i++){
    factorial *= i;
}

console.log("factorial of ", n , "is = ", factorial);


//FInd the larget number in an array with only positive number

let arr = [2, 5, 10, 4, 2, 7, 1, 9];
let larget = 0;

for (let i=0; i<=arr.length; i++){
    if(larget < arr[i]){
        larget = arr[i];
    }
}

console.log(larget);


//GPT