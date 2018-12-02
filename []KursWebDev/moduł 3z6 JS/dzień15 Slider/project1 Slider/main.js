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

let time = 3000;
let index = 0;


const activeActive = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[index].classList.add('active');
};
const changeSlide = () => {
    index++;
    if (index === arraySlider.length) index = 0;
    slideImg.src = arraySlider[index].img
    h1Img.textContent = arraySlider[index].txt

    activeActive()
};
setInterval(changeSlide, time);