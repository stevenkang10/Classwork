// function changeButtonColor() {
//     var button = document.querySelector("input");
//     button.style.backgroundColor = "red";
//     button.value = "Turn OFF";
// }

// var x = 10;

// document.getElementById('numDisplay').innerHTML = x;

// function button1(){
//     document.getElementById('numDisplay').innerHTML = ++x;
// }
// function button2(){
//     document.getElementById('numDisplay').innerHTML = --x;
// }

var displayNum = 10;
var num = document.getElementById("numDisplay");
num.innerHTML = displayNum;

function decrement(){
  displayNum--;
  otherWay(displayNum);
  num.innerHTML = displayNum;
}

function increment(){
  displayNum++;
  otherWay(displayNum);
  num.innerHTML = displayNum;
}

function otherWay(num) {
  var error = "";
  
  // if(num < 0 || num > 20){
  //   error = "Sorry, you need to go the other way.";
  // } else {
  //   error = "";
  // }
  
  error = num < 0 || num > 20 ? "Sorry, you need to go the other way." : "";
  
  document.getElementById("errorMessage").style.color = "red";
  document.getElementById("errorMessage").innerHTML = error;
  if(num < 0) {
    displayNum = 0;
  } else if (num > 20) {
    displayNum = 20;
  } else {
    displayNum = num;
  }
  return error;
}
