// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// const love = mom (Infinity);
// if (love === mom){
//   self.anyOneDestroys()
// }


// Javascript
window.onresize = screen;
window.onload = screen;

function screen() {
  myWidth = window.innerWidth
  myheight = window.innerHeight

document.getElementById('screenfit').innerHTML = 'Screen: ' + myWidth + "x" + myheight + ' px';
}