document.addEventListener('DOMContentLoaded', () => {
    const someElement = document.querySelector('#block');
    const someElementSibling = someElement.querySelector('p');
    console.log('alex - exercise 1 :');
    console.log(someElementSibling);

    //console.log('alex - exercise 2 :');
    const elementClass = document.querySelectorAll('p');
    elementClass.forEach((e) => {
        e.classList.add('new-textt');
    })

    //console.log('alex - exercise 3 :');
    const elementClassAdd = document.querySelectorAll('p');
    elementClassAdd.forEach((e) => {
        e.classList.toggle('paragraph1');
    })

    const elementClassStyle = document.querySelector('.paragraph1');
    elementClassStyle.style.fontSize = "42px";
    elementClassStyle.style.border = "solid 3px green";
})
