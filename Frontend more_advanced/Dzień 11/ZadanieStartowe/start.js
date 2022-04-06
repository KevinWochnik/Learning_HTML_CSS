
// 1. pobieramy potrzebne pliki z DOM

const btnIncrease = document.querySelector('.bigger');
const btnDecrease = document.querySelector('.smaller');
const text = document.querySelector('p');

// 1b. określamy potrzebne dane

let textSize = 20; //początkowa wielkość Font-Size dla p

text.style.fontSize = textSize + 'px';
// text.style.backgroundColor = 'grey'; <- lepiej w stylach CSS


// 3. określenie akcji - napisanie funckji

function textIncrease(){
    textSize++;
    text.style.fontSize = textSize + 'px';
}
function textDecrease(){
    textSize--;
    text.style.fontSize = textSize + 'px';
}

// 2. ustawienie nasłuchiwania na kliknięcie

btnIncrease.addEventListener('click', textIncrease)
btnDecrease.addEventListener('click', textDecrease)


