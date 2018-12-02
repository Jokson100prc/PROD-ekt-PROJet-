//1. pobieramy wszystkie potrzebne elementy z DOM

//const btnIncrease = document.querySelector('.bigger');
//const btnDecrease = document.querySelector('.smaller');
//const text = document.querySelector('p');

//1b - określamy potrzebne dane

//let textSize = 16; //początkowa wielkość font-size dla p


//3. Określenie akcji - napisanie funkcji
//function textIncrease() {
// console.log("klik!");
// textSize++;
// text.style.fontSize = textSize + "px";
//}

//2. Ustawienie nasłuchiwania na przyciskach na kliknięcie.

//btnIncrease.addEventListener('click', textIncrease)


const plusSize = document.querySelector('.bigger');
const minusSize = document.querySelector('.smaller');

plusSize.style.color = 'red';
plusSize.style.height = '60px';
minusSize.style.margin = "70px";
minusSize.style.width = "170px";


const text = document.querySelector('p');

let textSize = 36;
text.style.fontSize = textSize + "px";


function downSize() {
    textSize--;
    text.style.fontSize = textSize + "px";
}
minusSize.addEventListener('click', downSize);

function upSize() {
    textSize++;
    text.style.fontSize = textSize + "px";
}

plusSize.addEventListener('click', upSize);