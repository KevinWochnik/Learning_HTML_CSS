const kreski = document.querySelector('.fa-bars');
const iks = document.querySelector('.fa-times');
const burger = document.querySelector('.burger');
const aside = document.querySelector('aside');

burger.addEventListener('click', function(){
    kreski.classList.toggle('show');
    iks.classList.toggle('show');
    aside.classList.toggle('show');
})
