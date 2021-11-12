// function even(number){
//     if (number % 2 == 0){
//         return true 
//     } else {
//         return false
//     }
// }

// function hello(){
//     var blah = "It's early in teh morning";
//     console.log(blah);
// }

// hello();

// function hello(){
//     document.write ("will you be my friend")
//     document.write("please, i will give you money")
// }

// setInterval(hello, 1000);

// setInterval(
//     function(){
//         document.write("hello");
//     }, 3000
// );

// function fullname (){
//     var fname = prompt("what is your first name");
//     var lname = prompt("what is your last name");
//     return "hello " + fname + " " + lname;
// }

// console.log (fullname())

// function isHighest (x,y,z){

//     var maxvalue = 0;

//     if (x,y){
//         maxvalue = x;
//     } else {
//         maxvalue = y;
//     }
//     if(z > maxvalue){
//         maxvalue = z;
//     }
//     return maxvalue;
// }

// var names = ['reed', 'susan', 'ben', 'johnny', 'franklin'];

// var pets = ['moxxi', 'pickle', 'hootchie', 'monkeybutt'];

// pets.forEach(function(element){
//     document.write(element + " " + "is the best! ");
// })

// pets[1]= 'doggo';
// console.log(pets);

// var petsString = pets.toString();
// console.log(petsString);

// var join = pets.join(' * ');
// console.log(join);

// var people =['karen', 'patrick'];

// var family = pets.concat(people);
// console.log(family);

// var fruits =['apple','banana', 'orange', 'apple', 'mango'];
// var tangerine = fruits.indexOf('tangerine');
// console.log(tangerine);

// var apple = fruits.indexOf("apple",4);
// console.log(apple);




// var numbers = [4,9,16,25];

// var squareRoots = numbers.map(Math.sqrt);
// console.log(squareRoots);

// var words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

// var longWords = words.filter(function(thisword){
//     return thisword.length > 6;
// })

// console.log(longWords);

// var txt = 'banana';
// txt.length;

// var words = 'i love talking to animals'
// var result = words.slice(7,14);
// console.log(result);

// var question = 'what is my name?';
// var result = question.indexOf('George');
// console.log(result);

// var question = "What you ask? What is my name?";
// var lastResult = question.indexOf('What', 3);
// console.log(lastResult);


// var thename = 'My name is Susan Jones.';

// var result = thename.substr(11,5);
// var newResult = thename.substr(11,11);
// var lastResult = thename.substr(11);


// console.log(result);
// console.log(newResult);
// console.log(lastResult);

// var person = {}


// person.name = "Walter White";
// person.age = 50;
// person.city = "Albq";
// person.hobbies = "Cooking";

// var person = {
//     name: "Walter White", 
//     age: 50,
//     family: ["Skylar", "Flynn", "Holly"],
//     city: "Albuquerque", 
//     smart: true, 
//     associates: {
//         friend: "Jesse", 
//         enemy: "Gus"
//     },
//     hobbies: "Cooking"
// }

// var posts = [
//     {
//       title: "How to cook the perfect scrambled eggs",
//       author: "Bob Odenkirk",
//       comments: ["The secret is lots of butter", "Will this raise my cholesterol?"]
//     },
//     {
//       title: "Eggs are cheap, quick, and easy",
//       author: "Bryan Cranston",
//       comments: ["What if I don't have a spatula?", "I love butter.", "Salt and pepper are the ONLY spices you need"]
//     }
// ]

// var food2 = document.getElementsByClassName("breakfast");

// console.log(food2[0]);
// console.log(food2[1]);

// var food3 = document. getElementsByTagName("li");
// console.log(food3[0]);

// var food4 = document.querySelector("#fruit");
// console.log(food4);

// var selectClass = document.querySelector(".breakfast");
// console.log(selectClass);

// var food5 = document.querySelectorAll("h1");
// console.log(food5);

// var selectClass = document.querySelectorAll(".breakfast");

// var selectId = document.querySelectorAll("#fruit");

// document.getElementById("fruit").style.color = "green";
// document.getElementById("fruit").style.border ="10px solid orange";
// document.getElementById("fruit").style.fontSize = "36px";
// document.getElementById("fruit").style.background ="blue";
// document.getElementById("fruit").style.marginTop = "150px";

// document.getElementsByTagName("html").style.color = "blue";

// var theBody = document.querySelector("body");
// var isOrange = false;

// setInterval(function(){
//     if(isOrange === true){
//         theBody.style.background = "blue"
//     } else {
//         theBody.style.background = "orange";
//     }
//     isOrange = !isOrange;
// }, 3000);


// document.querySelector("h1").addEventListener("mouseover",
// function(){
//     document.querySelector("p").textContent = "Cheesecake bites";
// })

// Class for 7.8.2021 



// var soup = 1 //not the best solution to click image array would be better //
// var img = document.querySelector("img")

// img.addEventListener("click", function(){
//     if(soup === 1) {
//         img.setAttribute("src", "/img/f.jpg")
//         soup = 2 
//     } else if (soup === 2) {
//         img.setAttribute("src", "/img/b.jpg")
//         soup = 3;
//     } else {
//         img.setAttribute("src", "/img/z.jpg")
//         soup = 1;
//     }
// });


// $(document).ready(function(){
//     $('img').hide();
//     $('input:checkbox').change(function(){
//       this.checked?$('img').show():$('img').hide();
//     })
//   });


// document.querySelector("#hide").addEventListener("click", function(){
//     if(document.querySelector("#hide").checked){
//         document.querySelector("img").style.display = "none";
//     } else {
//         document.querySelector("img").style.display = "initial";
//     }

// })

// document.querySelector("form").addEventListener("submit", function(event){
//     var errors = [];

//     if(document.getElementById("name").value === ""){
//         errors.push("Please enter a name");
//     }

//     if(document.getElementById("password").value.length <= 6){
//         errors.push("Password must be greater than 6 characters");
//     }

//     if(error.length > 0){
//         event.preventDefault();
//         document.querySelector("#wrapper").style.border = "1px solid red";
//         document.querySelector("p").textContent = errors.join(", ");
//         document.querySelector("p").style.color = "red";
//     }
// })

// document.querySelector("form").addEventListener("submit", function(event){
//     var errors = [];
    
//     if(document.getElementById("name").value === ""){
//       errors.push("Please enter a name");
//     }
    
//     if(document.getElementById("password").value.length <= 6){
//       errors.push("Password must be greater than 6 characters");
//     }
    
//     if(errors.length > 0){
//       event.preventDefault();
//       document.querySelector("#wrapper").style.border = "1px solid red";
//       document.querySelector("p").textContent = errors.join(", ");
//       document.querySelector("p").style.color = "red";
//     }

// });

// 7.10.21 class below//

