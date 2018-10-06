let arrayPlace = 0;

const colorHome = document.querySelector('.color');
const grayHome = document.querySelector('.gray');
const h1Home = document.querySelector('h1');
const h2Home = document.querySelector('h2');

const colorArray = ['img/s1.png', 'img/s2.png', 'img/s3.png'];
const grayArray = ['img/s1a.png', 'img/s2a.png', 'img/s3a.png'];
const h1Array = ['Anna Baugart', 'FilipZ Konopii', 'Mar Janek'];
const h2Array = ['Programistka JS', 'UX IX Graphic', 'Java Senior Developer'];

function changeImage() { //coś tu niedziała - nie wyświetla się po pętli pierwszy element jaki jest ustawiony w funkcji
    arrayPlace++;

    colorHome.src = colorArray[arrayPlace];
    if (arrayPlace == colorArray.length) {
        arrayPlace = 0
    };
    grayHome.src = grayArray[arrayPlace];
    if (arrayPlace == grayArray.length) {
        arrayPlace = 0
    };
    h1Home.textContent = h1Array[arrayPlace];
    if (arrayPlace == h1Array.length) {
        arrayPlace = 0
    };
    h2Home.textContent = h2Array[arrayPlace];
    if (arrayPlace == h2Array.length) {
        arrayPlace = 0
    }
}

setInterval(changeImage, 4000)