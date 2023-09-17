/*  JSON
  Accessing Data from JSON


  - JSON.parse (data) Method
     to parse a string data into a JS object

  - JSON.stringify( json ) Method
     to parse a JS object data into JSON   

*/

/* 
let jsonRes = 
'{"fact":"Cats respond better to women than to men, probably due to the fact that womens voicee have a higher pitch.","length":107}'


let validJsonRes = JSON.parse(jsonRes);
console.log(validJsonRes.fact);

let stu = {
    name: "Mohd Adil",
    Age: 19,
    marks: 98
} */

/* JSON.stringify(stu); */

/* Testing API request
  Tools

  - Hoppscoth -
  
  - Postman
*/


/* Ajax
   Asynchronous JavaScript and XML
*/



/* let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let fact = await getFacts();
    // console.log(fact);
    let p = document.querySelector("#output");
    p.innerText = fact;
});



let url = "https://catfact.ninja/fact"


async function getFacts() {
    try{
        let res = await axios.get(url);
        return res.data.fact;
    } catch (e) {
        console.log("ERROR - ", e);
        return "No fact found";
    }
} */

/* 

fetch(url)
   .then((res) => {
     return res.json();
   })
   .then((data) => {
    console.log("data1 = ",data.fact);
    return fetch(url);
   })
   .then((res) => {
    return res.json();
   })
   .then((data2) => {
    console.log("data2 = ",data2.fact);
   })
   .catch((err) => {
     console.log("ERROR - ", err);
   }) 

*/

let url = "http://universities.hipolabs.com/search?name=";

let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  let country = document.querySelector("input").value;
  console.log(country);

  let colArr = await getColleges(country);
   show(colArr);
});

function show(colArr) {
  let list = document.querySelector("#list");
  list.innerText = "";
  for (col of colArr) {
      console.log(col.name);

      let li = document.createElement("li");
      li.innerText = col.name;
      list.appendChild(li);
  }
}

async function getColleges(country) {
  try {
    let res = await axios.get(url + country);
    return res.data;
  } catch (e) {
    console.log("ERROR - ",e);
      return [];
  }
}