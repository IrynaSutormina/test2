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
  
    const section = document.querySelector('.section');
    const str ='<div id="block"> <input type="text" class="enter-text1" value="12345""><p class="paragraph3">2</p><button class="alex_btn">click me</button><a class="alex_link" href="#blank">Alex link</a> </div> ';
    const paragraph4 = '<div id="block1"><p>0</p><p class="paragraph3">1</p><p class="paragraph3">2</p><p class="paragraph3">3</p><p class="paragraph3">4</p><p class="paragraph3">5</p><p class="paragraph3">6</p></div> ';
    section.insertAdjacentHTML('afterbegin', str);   
    section.insertAdjacentHTML('beforebegin', paragraph4);
  
    const addZnak = document.querySelectorAll('.paragraph3');
    addZnak.forEach((e)=>{
        e.addEventListener('click', addFunc);
    })
    function addFunc () {
        console.log(this);
        this.insertAdjacentText('beforeend', '!');
    }
  
    const btnLink = document.querySelector('.alex_btn');
    const someLink = document.querySelector('.alex_link');
    const changeParagraph = document.querySelector('.paragraph3');
    btnLink.addEventListener('click', (e) => {
            changeParagraph.innerHTML = `<p> ${someLink.innerHTML} <p/>`;
            console.log('after');
    })
  
    const inputField = document.querySelector('.enter-text1');
    const overlay = document.querySelector('.wrapper');
    inputField.addEventListener('focus',  (e) => {
        e.target.value = '1';
    })
    inputField.addEventListener('blur', (e) => {
        e.target.value = '2';
    })
  
  })
  