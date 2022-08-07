document.addEventListener('DOMContentLoaded', ()=>{

console.log('start');

let element = document.querySelector('p');

let button = document.querySelector('#button-1');
console.log(button);


element.classList.add('new-class');
//element.classList.toggle('text');
if (element.classList.contains('text')) {
    element.classList.remove('text');
} else {
    element.classList.add('text');
}

let allElement = document.querySelectorAll('p');
allElement.forEach((e)=>{
    e.classList.add('forEach');
})
// element.setAttribute("style", "background-color: red;");
// element.setAttribute("style", "font-size: 10px;");

element.style.backgroundColor = "red";
element.style.fontSize = "20px";
element.style.color = "white";

button.addEventListener('click', first);

function first () {
    alert('K.DHFB.KHSDF');
} 
window.addEventListener('resize', first);

})
