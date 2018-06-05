var myButton = document.querySelector('button')
var myHeading = document.querySelector('h1')
function setUsername() {
  var myName = prompt("What's your name?");
  localStorage.setItem('name',myName);
  myHeading.textContent = 'Hi ' + myName + ', this is a fish eating a fish';
}
if(!localStorage.getItem('name')) {
  setUsername();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Hi ' + storedName + ', this is a fish eating a fish';
}
myButton.onclick = function() {
  setUsername();
}
