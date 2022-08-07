let myButton = document.querySelector(".button");
let body = document.querySelector('body');

myButton.addEventListener('click', first);

function first () {
  body.classList.toggle('bg-red');
}

