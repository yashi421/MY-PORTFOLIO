const roles = [
"AI Developer",
"Android Developer",
"Web Developer",
"Problem Solver"
];

let roleIndex = 0;
let charIndex = 0;

function typeEffect(){

let currentRole = roles[roleIndex];

document.getElementById("typing").textContent =
currentRole.substring(0,charIndex);

charIndex++;

if(charIndex > currentRole.length){
charIndex = 0;
roleIndex++;

if(roleIndex >= roles.length){
roleIndex = 0;
}
}

setTimeout(typeEffect,150);
}

typeEffect();