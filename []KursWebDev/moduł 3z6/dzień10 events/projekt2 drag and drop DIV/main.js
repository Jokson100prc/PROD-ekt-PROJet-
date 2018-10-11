const div = document.querySelector('div');

const divXY = 100;
div.style.top = `${divXY}px`;
div.style.left = `${divXY}px`;


let activeDrag = false;

let insertDivX;
let insertDivY;


div.addEventListener('mousedown', (e) => {
    insertDivX = e.offsetX;
    insertDivY = e.offsetY;
    activeDrag = !activeDrag;
    div.style.backgroundColor = "rgb(126, 70, 123)";
});


div.addEventListener('mousemove', (e) => {
    const diX = e.clientX - insertDivX;
    const diY = e.clientY - insertDivY;
    if (activeDrag) {
        div.style.top = `${diY}px`;
        div.style.left = `${diX}px`;
    }
});


div.addEventListener('mouseup', () => {
    activeDrag = !activeDrag;
    div.style.backgroundColor = "rgb(122, 34, 118)";
});











// const div = document.querySelector('div');
// const positionPrc = 50;
// const positionCorrect = 100;
// let posX = div.style.top = `calc(${positionPrc}% - ${positionCorrect}px)`;
// let posY = div.style.left = `calc(${positionPrc}% - ${positionCorrect}px)`;

// let mouseDown = false;


// let insertDivX;
// let insertDivY;

// div.addEventListener('mousedown', (e) => {

//     insertDivX = e.offsetX;
//     insertDivY = e.offsetY;
//     div.style.backgroundColor = "rgb(126, 70, 123)";
//     mouseDown = !mouseDown
// });


// div.addEventListener('mousemove', (e) => {

//     const divX = `${e.clientX - insertDivX}px`;
//     const divY = `${e.clientY - insertDivY}px`;
//     if (mouseDown) {
//         div.style.top = divY;
//         div.style.left = divX;
//     }

// });


// div.addEventListener('mouseup', () => {
//     div.style.backgroundColor = "rgb(122, 34, 118)";
//     mouseDown = !mouseDown
// });