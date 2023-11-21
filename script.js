// =========================================== DOM ===============================================

// console.dir(document.body);

// console.log(window)


// ================================== Selecting elements as objects ===========================

// console.log(document.body.children.greeting);


// ---------------- Changing innerText --------------

// document.body.children.greeting.innerText = "BYE!";

// ---------------- Changing innerHTML --------------

// document.body.children.greeting.innerHTML = "<h3>BYE!</h3>";


// ============================ Accessing elements in the DOM ============================= 


// ---------------- getElementById() --------------

// console.log(document.getElementById("two"));

// ------------ getElementByTagName() -------------

// console.log(document.getElementsByTagName("p"));

// ----------- getElementByClassName() ------------

// console.log(document.getElementsByClassName("example")); 


// ======================= Accessing elements with a CSS selector ===========================


// ---------------- querySelector() --------------

// console.log(document.querySelector(".example"));

// ---------------- querySelectorAll() --------------

// console.log(document.querySelectorAll(".example"));


// ======================= Element Click handler ===========================


// ------------------ onclick()  -----------------

// function btn(){
//     alert("Hi!")
// }


// ======================= This and the DOM ===========================

// function reveal(el){
//     console.log(el);
// }


// =================== Manipulating element style =====================


// function toggleDisplay(){

//     let p = document.getElementById("magic");

//     if(p.style.display === "none") {
//     p.style.display = "block";
//     }
//      else {
//     p.style.display = "none";
//     }

// }


// =================== Add event listener =====================


// document.getElementById("btn").addEventListener("click", abc)

// function abc(){
//     document.body.style.background = "green";
// }


// =================== Creating New Element =====================


// let el = document.createElement("p");
// el.innerText = Math.floor(Math.random() * 100);
// document.body.appendChild(el);