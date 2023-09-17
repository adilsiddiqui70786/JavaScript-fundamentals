//Replace & Repeat Method

let msg = "Ilovecoding";
let newMsg = msg.replace("coding" , "You");  //Iloveyou
console.log(newMsg);


let str = "LoveloveCodinglovelove"
let newStr = str.replace("love" , "You");  //LoveYouCodinglovelove
console.log(newStr);


//Repeat Method 
 let str1 = "Passionate ";
 console.log(str1.repeat(5));   //It print 5 time Passionate 5

 //Practice 

 let str2 = "ApnaCollege";
//  let newStr2 = str2.slice(4).replace("l", "t");
//  newStr2 = newStr2.replace('l', 't');
//we can also write this
let newStr2 = str2.slice(4).replace('l', 't').replace('l','t');
 console.log(newStr2);



 let numbers = []