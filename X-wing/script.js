const xWing = document.querySelector('.x-wing') ; 
let number = 0;

document.addEventListener('keydown', (event) => {
if(event.key === 'z') {
xWing.style.top = number + "px";
number-= 10; 
}});

document.addEventListener('keydown', (event) => {
if(event.key === 's') {
xWing.style.top = number + "px";
number+= 10; 
}});

document.addEventListener('keydown', (event) => {
if(event.key === 'd') {
xWing.style.left = number + "px";
number+= 10;
}});

document.addEventListener('keydown', (event) => {
if(event.key === 'q') {
xWing.style.left = number + "px";
number-= 10;
}});
