// /* DOM Events -

//    Events are signals that something has occured
//    (user inputs / actions)      
   
//    Inline Events - Ex- <button onclick="console.log('button was clicked'); console.log('by user')">click me</button>   
   
//    onclick(when an element is clicked)

//    onmouseenter(when mouse enters an element)



//    Event Listener
//    addEventListener

//    element.addEvenetListener( event, callback)

//    btn.addEveventListener("click", function () {
//       console.log("button clicked!")
//    });



//      this in Event Listener

//      When 'this' is used in a callback of
//      event handler of something, it refers to that something.


//      Keyboard Events : 
//      1. key: shows what is visble in screen.
//      2. code: return key of that key

   
//    */

// /* 
//    let btn = document.querySelector("button");
//    console.dir(btn);

//    btn.onclick = function() {
//     console.log("button was clicked");
//     alert("message on console");
//    } */

// /*    function sayHello() {
//     console.log("Hello");
//    }

//    function sayName() {
//     alert("Apna College");
//    }


// //    btn.onclick = sayHello; 

//    let btns = document.querySelectorAll("button");

//    for (btn of btns) {
//     // btn.onclick = sayHello;
//     // btn.onmouseenter = function () {
//     //     console.log("you entered a button");
//     // }

//     btn.addEventListener("dblclick", function() {
//         console.log("You double clicked me")
//     });

//     // btn.addEventListener("click", sayHello);

//    } */

//    let btn = document.querySelector("button");

//    btn.addEventListener("click", function(){
//     let h3 = document.querySelector("h3");
//     let randomColor = getRandomColor();
//     h3.innerText = randomColor;

//     let div = document.querySelector("div");
//     div.style.backgroundColor = randomColor;

//     console.log("color updated")
//    });


//    function getRandomColor() {
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);

//     let color = `rgb(${red}, ${green}, ${blue})`;
//     return color;
//    }


//    let box = document.querySelector("div");
//    let h = document.querySelector("h3");
//    h.addEventListener("click", function() {
//     console.log("paragraph was clicked!");
//    })

//    box.addEventListener("mouseenter", function() {
//     console.log("mouse is inside the box!")
//    });


//    let btn2 = document.querySelector("#btn2");
//    btn2.addEventListener("click", function() {
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue"
//    });





// let btn5 = document.querySelector(".btn3");
// let h1 = document.querySelector("h1");
// let h4 = document.querySelector("h4");
// let p = document.querySelector("p");

// function changeColor() {
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// }

// btn5.addEventListener("click", changeColor);
// h1.addEventListener("click", changeColor);
// h4.addEventListener("click", changeColor);
// p.addEventListener("click", changeColor);


// /* //Keyboards Events

// let inp = document.querySelector("input");

// inp.addEventListener("keydown", function(event){
//     console.log("key =", event.key);
//     console.log("code =", event.code);
//     console.log("key was pressed!");
// }); */

// // inp.addEventListener("keyup", function(){
// //    console.log("key was realease!");
// // });

// // Form

// let form = document.querySelector("form");

// form.addEventListener("submit", function (event){
//    event.preventDefault();


//    let inp = document.querySelector("input");
//    console.dir(inp);
   
// });

let inp = document.querySelector("#text");
let p = document.querySelector("p");

inp.addEventListener("input", function() {
   console.log(inp.value);
   p.innerText = inp.value
})