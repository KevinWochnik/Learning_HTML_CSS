// POTRZEBNE ZMIENNE

let counter = 0;

const dodaj = document.querySelector('button.pierwszy');
const odejmij = document.querySelector('button.drugi');


// POBEIRAMY POTRZEBNE ELEMENTY STRONY

const spanCounter = document.querySelector('span.counter');

// document.body.addEventListener('click', function(){
// counter = counter +1;
// // console.log(counter);
// spanCounter.textContent = counter
// })

dodaj.addEventListener('click', function(){
    counter = counter +1;
    // console.log(counter);
    spanCounter.textContent = counter;
})

odejmij.addEventListener('click', function(){
    counter = counter -1;
    spanCounter.textContent = counter
})





