const arrow = document.querySelector('.fas')
const nav = document.querySelector('nav')

arrow.addEventListener('click', function(){
    arrow.classList.toggle('off');
    nav.classList.toggle('off');
})