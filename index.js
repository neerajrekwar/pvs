

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
  myWidth = window.innerWidth;
  myHeight = window.innerHeight;

  document.getElementById('screen-fit').innerHTML =
    'Screen: ' + myWidth + 'x' + myHeight + ' px';
}
