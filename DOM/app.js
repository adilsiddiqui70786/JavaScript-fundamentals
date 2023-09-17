
// // let smallImage = document.getElementsByClassName("oldImg");
// // for(let i = 0; i < smallImage.length; i++){
// //     smallImage[i].src = "Assets/spiderman_img.png";
// //     console.log(`value of image no. ${i} is changed`);
// // }

// console.dir(document.querySelector("h1"));
// console.dir(document.querySelector("#description"));
// console.dir(document.querySelector(".oldImg"));

// console.dir(document.querySelector("div a"));


// // for All

// console.log(document.querySelectorAll("p"));


// let heading = document.querySelector('h1');
// console.dir(heading);

// // heading.innerHTML = "<u>Spider Man</u>"
// heading.innerHTML = `<u>${heading.innerText}</u>`;

// // Manipulating Attributes

// // Object.getAttribute(attr)
// // Obj.setAttribute(Attr, value);

// let img = document.getElementById('mainImg');
// img.getAttribute('id');
// // 'mainImg'
// img.setAttribute('id', 'spider');
// // undefined
// img.getAttribute('id');
// // 'spider'
// img.setAttribute('src', "assets/creation_3.jpeg");
// // undefined
// img.getAttribute('class')
// //null
// img.setAttribute('class', 'hero')
// //undefined
// img.getAttribute('class')
// // 'hero'

// // Style Property - work on inline styles. not in css

// heading.style.color = 'purple';
// heading.style.backgroundColor = 'yellow';

// let links = document.querySelectorAll(".box a");

// for(link of links){
//     link.style.color = "yellow"; //inline styles
// }

// for(let i = 0; i < links.length; i++){
//     links[i].style.backgroundColor = "green";
// }


// using classList: obj.classList

/* classList.add() to add new classes
classList.remove() to remove classes
classList.contains() to check if class exits
classList.toggle() to toggle between add & remove */

// let head = document.querySelector('h1');
// console.log(head.classList);
// head.classList.add('green');
/* let heading = document.querySelector('h1');
// undefined
heading.classList;
// DOMTokenList [value: '']
heading.classList.add('green');
// undefined
heading.classList.add('underline')
heading.classList.remove('underline')
 */
// OR

/* heading.setAttribute('class', 'underline green' ); // not prefer more

heading.classList.contains("underline"); // to check 

heading.classList.toggle("green");

//  -------------------------------------------

let box = document.querySelector(".box");

box.classList.add("yellowbg");

 */
/* Navigation 

parentElement 
children
previousElementSibling / nextElementSibling        */


// let img2 = document.querySelector('mainImg');
// img2.previousElementSibling.style;
// img2.previousElementSibling.style.color = "green";




/* Adding Elements
   
    document.createElement('p')

    appendChild(element) : to add something in last 

    append(element)  /String /Text

    prepend (element)  //to add something in start

    inserAdjacentElementt(where element)    */

    /* 
    
    let newP = document.createElement('p');
    // undefined
    newP.innerText = "hello, I am a new paraGraph"
    // 'hello, I am a new ParaGraph'
    let body = document.querySelector('body') 
    // undefined
    body.appendChild(newP);
   //  <p>​hello, I am a new ParaGraph​</p>​     
   
   Removing ELement

   - removeChild(element)
   - remove(element)
   
   */

   //Practice QS -

/*    let p = document.createElement('p');
   p.innerText = "Hey I'm red!";
   document.querySelector('body').prepend(p);

   p.classList.add('red');

   let h3 = document.createElement('h3');
   h3.innerText = "I'm a blue!";
   document.querySelector('body').prepend(h3);

   h3.classList.add('blue');


   let div = document.createElement('div');
   let h1 = document.createElement('h1');
   let para2 = document.createElement('p');

   h1.innerText = "I'm inner div";
   para2.innerText = "Mee too!";

   div.prepend(h1);
   div.prepend(para2);

   div.classList.add("box");
   document.querySelector('body').prepend(div);
   
 */

   // Practice QS

   /* 1. Create a new input and button element on the page
   usig JavaScript only. Set the text to button to "click me" ;  */

   let button = document.createElement('button');
   let input = document.createElement('input');   

   button.innerText = "click me";

   document.querySelector('body').append(input);
   document.querySelector('body').append(button);


   /* 2. Add following attributes to the element:
    - Change placeholder value of input to "username"
    - Change the id of button to btn      */


    button.setAttribute("id", "btn");
    input.setAttribute("placeholder", "username");


    /* 3. Access the btn using querySelector and button id. 
          Change th ebutton background color ro blue and
          text color to white */

   let btn = document.querySelector("#btn");
   btn.classList.add("btnStyle");

   /* 4. Create an h1 element on the page and set 
   its text to “DOM Practice” underlined.
   Change its color to purple */

   let h1 = document.createElement('h1');
   h1.innerText = "DOM Practice";
   document.querySelector('body').prepend(h1);
   h1.classList.add("heading");


   /* Create a p tag on the page and set its text to "Apna 
   College Delta Practice" where Delta is bold. */


   let para = document.createElement('p');
   para.innerHTML = "Apna College <b>Delta</b> Practice";
   document.querySelector('body').append(para);
