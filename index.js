burger = document.querySelector('.burger');
right = document.querySelector('.right');
navList = document.querySelector('.navlist');
body = document.querySelector('.container');
submit = document.querySelector('.btn');

burger.addEventListener('click', ()=>{
    right.classList.toggle('v-class-resp');
})

navList.addEventListener('click', ()=>{
    right.classList.add('v-class-resp');
})

body.addEventListener('click', ()=>{
    right.classList.add('v-class-resp');
})

submit.addEventListener('click', ()=>{
    alert("Your message has been submitted");
})

