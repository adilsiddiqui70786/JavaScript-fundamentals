const max = prompt("Enter the Maximum number :")

const random = Math.floor(Math.random() * max) +1;

// console.log("random no-", random);

let guess = prompt("Guess the number");

while(true) {
    if(guess == "quit"){
        console.log("User Quit");
        break;
    }

    if(guess == random) {
        console.log("Congrats! You are right. Your random no is" ,random);
        break;
    } else if(guess < random) {
        guess = prompt("hint : Your guess is too small, Please try again");
    } else {
        guess = prompt("hint : Your guess is too large, Please try again");
    }

}