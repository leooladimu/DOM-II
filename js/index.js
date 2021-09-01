// Your code goes here
const btn = document.querySelector('.logo-heading');
console.log('I love you');
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

const pick = document.querySelector('. content-pick p');
    console.log(pick);
    window.addEventListener('load', (event) => event.target.style.textAlign = 'center');
