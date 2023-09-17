let p = 125;
let m = 155;
let a = 450;

if(p > m && p > a){
    console.log( p , "is the larget number");
}else if (m > p && m > a){
    console.log( m , "is the largest number");
}else if (a > p && a > m){
    console.log( a , "is the largest number");
}


// by Mam

let x = 15;
let y = 56;
let z = 745 ;

if(x > y){
    if(x > z){
        console.log(x , "is the largest number");
    } else {
        console.log(z , "is the largest number");
    }
} else {
    if(y > z) {
        console.log(y , "is the largest number");
    } else {
        console.log(z , "is the largest number");
    }
}