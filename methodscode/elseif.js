//Else if Examples

let marks = 89;
if (marks >= 80) {
    console.log("A+");
} else if ( marks >= 60){
    console.log("A");
} else if ( marks >= 33){
    console.log("B");
}else if ( marks < 33){
    console.log("F");
}

// Season If Else 

let month = "December";
if (month === "January") {
    console.log("Winter is here");
} else if (month === "April"){
    console.log("Summer is here")
} else if (month === "August"){
    console.log("Rain is here")
} else if (month === "December"){
    console.log("Your birthday month is here")
} else{
    console.log("Enter Valid Monthy ")
}