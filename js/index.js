// Your code goes here
const btn = document.querySelector('.logo-heading');
console.log('xxx');
function random(number) {
  return Math.floor(Math.random() * (number+1));
}

btn.onclick = function() {
    const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = rndCol;
  }

const pic = document.querySelector('.text-content');
console.log(pic);
  
pic.addEventListener('mouseover', ( event ) =>
    event.target.style.color = 'green');

pic.addEventListener('mouseout', (event) =>
    event.target.style.color = 'black');

const tag = pic.nextElementSibling;
    console.log(tag);
    tag.addEventListener('mouseover', (event) => 
    event.target.style.color = 'red');

const pick = document.querySelector('.footer');
    console.log(pick);
    window.addEventListener('load', (event) => event.target.style.textAlign = 'center');

// zoom div in and out with scroll wheel
function zoom(event) {
  event.preventDefault();
  let scale = 1;
  scale += event.deltaY * -0.01;
  x.style.transform = `scale(${scale})`;
}
var x = document.querySelector('.content-destination');
x.addEventListener('wheel', zoom);

// doubleclick and it turns red
let my = document.querySelector('.content-pick h4');
my.addEventListener('dblclick', (event) => 
event.target.style.color = 'red');
