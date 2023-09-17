let guess = prompt("Guess My Favorite Movie Name");

const favMovie = "Dhadkan";

while((guess != favMovie)){
    if(guess == "quit"){
        console.log("You Quit!")
        break;
    }
    guess = prompt("You Guess Wrong. Please try again!");
}

if(guess == favMovie){
    console.log("Congrats. You guess Correct!");
} 

