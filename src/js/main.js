document.addEventListener('DOMContentLoaded', ()=>{

//console.log('start');

let element = document.querySelector('p');

console.log(element.innerHTML);
element.innerHTML = '<a>Link</a>';

let button = document.querySelector('#button-1');
//console.log(button);


element.classList.add('new-class');
//element.classList.toggle('text');
if (element.classList.contains('text')) {
    element.classList.remove('text');
} else {
    element.classList.add('text');
}

//let allElement = document.querySelectorAll('p');
//allElement.forEach((e)=>{
//    e.classList.add('forEach');
//})
// element.setAttribute("style", "background-color: red;");
// element.setAttribute("style", "font-size: 10px;");

element.style.backgroundColor = "red";
element.style.fontSize = "20px";
element.style.color = "white";

button.addEventListener('click', first);

function first () {
    //alert('K.DHFB.KHSDF');
} 
window.addEventListener('resize', first);

let numbers = document.querySelectorAll('.number');
let sumButton = document.querySelector('.button-sum');
//console.log(numbers, sumButton);
let sum = 0;

sumButton.addEventListener('click', ()=>{
    strangeSum (numbers);
});
//console.log(sum);

function strangeSum (array) {
    array.forEach((e)=>{        
        sum = sum + (+e.textContent) ; 
        //console.log(sum);        
    })  
}

let inputField = document.querySelector('.enter-text');
let inputList = document.querySelectorAll('.enter-text');
let overlay = document.querySelector('.wrapper');

//inputField.addEventListener('blur', func);
inputList.forEach((inputListitem)=>{
    inputListitem.addEventListener('blur', func);
})

function func() {
    console.log(this); // содержит ссылку на наш элемент 
    this.value = '';        
}
    

inputField.addEventListener('input', (event)=>{
    console.log(event.target.value);
    let value = event.target.value;
    setTimeout(()=>{
        overlay.innerHTML = `<p> ${value} <p/>`;
        console.log('Timer')
    }, 5000);
    console.log('after');
})

// document.addEventListener('click', (event) =>{
//     console.log(event.target);
// })


let section = document.querySelector('.section');

let str = '<div id="id1"><p>1</p><p class="paragraph">2</p><button>click me</button></div> ';

section.insertAdjacentHTML('afterbegin', str);



})

