// Your code goes here
const btn = document.querySelector('.logo-heading');
console.log(btn);
function random(number) {
  return Math.floor(Math.random() * (number+1));
}

btn.onclick = function() {
    const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = rndCol;
  }

const pic = document.querySelector('.content-destination');
// console.log(pic);
  
pic.addEventListener("mouseover", function( event ) {
    event.target.style.color = "red";
});