console.log("Hello js");


// DOM MANIPULATION of 4 types
let firstEle = document.querySelector("p");
console.log(firstEle);

let allEle = document.querySelectorAll("p");
console.log(allEle);

let byId = document.getElementById("p");
console.log(byId);

let byClass = document.getElementsByClassName(".myClass");
console.log(byClass);

let byTag = document.getElementsByTagName("p");
console.log(byTag);
//

// DOM Properties 4 types
let div = document.querySelector("div");
console.dir("div");
console.log(div.innerText);
console.log(div.innerHTML);
// div.innerHTML = "abcd"; //remove whole and write abcd


//