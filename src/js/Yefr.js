document.addEventListener('DOMContentLoaded', ()=>{
// let myButton = document.querySelector(".button");
// let body = document.querySelector('body');

// myButton.addEventListener('click', first);

// function first () {
//   body.classList.toggle('bg-red');
// }
// console.log(firstParBlock)

 let firstParagraphBlock = document.querySelector('#block').querySelector('p');
 console.log(firstParagraphBlock);
 
 let exercise2 = document.querySelector('#block').querySelectorAll('p');
 exercise2.forEach((e)=>{
  e.classList.add('new-text');
 })

 let exercise3 = document.querySelector('#block').querySelectorAll('p');
 exercise3.forEach((e)=>{
  e.classList.toggle('paragraph');
 })

 let exercise4 = document.querySelector('.paragraph');
 exercise4.style.fontSize = "40px";
})
