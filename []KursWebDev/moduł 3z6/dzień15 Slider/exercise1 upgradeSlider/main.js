// 1. Klawisz <- (stzałka w lewo) przesuwa w lewo (cofa) slider
// 2. Klawisz -> (stzałka w lewo) przesuwa w prawo slider (do przod, czyli tak jak przy funkcji changeSlide) 
// lewa strzałka: keyCode = 37
// prawy strzałka: keyCode = 39
// 3. (strzałki) wstrzymuje setInterval, a po zmianie slajdu uruchamiają go ponownie (czas ma się liczyć ponownie)

// Projekt tutaj (przetestuj działajanie strzałek na klawiaturze)
// https://websamuraj.pl/examples/js/projekt9/


const arraySlider = [{
    img: "images/img1.jpg",
    txt: "Pierwszy text!",
}, {
    img: "images/img2.jpg",
    txt: "Drugi text!",
}, {
    img: "images/img3.jpg",
    txt: "Trzeci text!",
}];

const h1Img = document.querySelector('h1.slider');
const slideImg = document.querySelector('img.slider');

const dots = [...document.querySelectorAll('.dots span')];
const rightArrow = document.querySelector('.right');
const leftArrow = document.querySelector('.left');

let time = 5000;
let pause = 25000;
let index = 0;

const changeSlideByKeyArrow = (e) => {
    if (e.keyCode === 37 || e.keyCode === 39) {
        e.keyCode === 39 ? index++ : index--
    };
    if (index >= arraySlider.length) index = 0;
    if (index < 0) index = arraySlider.length - 1;
    slideImg.src = arraySlider[index].img;
    h1Img.textContent = arraySlider[index].txt;
    console.log(index);
    activeDot()

    clearInterval(indexInterval);
    // setTimeout(function () {
    indexInterval = setInterval(changeSlide, time)
    // }, pause);
};
addEventListener('keydown', changeSlideByKeyArrow)

leftArrow.addEventListener('click', () => {
    index--;
    if (index < 0) index = arraySlider.length - 1;
    slideImg.src = arraySlider[index].img;
    h1Img.textContent = arraySlider[index].txt;
    activeDot();

    clearInterval(indexInterval);
    // setTimeout(function () {
    indexInterval = setInterval(changeSlide, time)
    // }, pause);
});

rightArrow.addEventListener('click', () => {
    index++;
    if (index >= arraySlider.length) index = 0;
    slideImg.src = arraySlider[index].img;
    h1Img.textContent = arraySlider[index].txt;
    activeDot();

    clearInterval(indexInterval);
    // setTimeout(function () {
    indexInterval = setInterval(changeSlide, time)
    // }, pause);
});

const activeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[index].classList.add('active');
};
const changeSlide = () => {
    index++;
    if (index === arraySlider.length) index = 0;
    slideImg.src = arraySlider[index].img;
    h1Img.textContent = arraySlider[index].txt;

    activeDot()
};
let indexInterval = setInterval(changeSlide, time);



// utwórz funkcje keyChangeSlide. Zadanie może wymagać także zmian poza funkcją.
// window.addEventListener('keydown', keyChangeSlide)