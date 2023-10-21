var red = document.getElementById('red');
var green = document.getElementById('green');
var yellow = document.getElementById('yellow');
var blue = document.getElementById('blue');
var colour = document.getElementById('colour');

red.addEventListener('click', function(){
      colour.style.backgroundColor='red';
});
green.addEventListener('click', function(){
      colour.style.backgroundColor='green';
});
yellow.addEventListener('click', function(){
      colour.style.backgroundColor='yellow';
});
blue.addEventListener('click', function(){
      colour.style.backgroundColor='blue';
});