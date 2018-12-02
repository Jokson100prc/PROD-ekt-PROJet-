const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt2 = ['tekst1', 'tekst2', 'tekst3']
const txt = ['Hello World!', 'Good to see You!', 'Let us start the Game...']

let indexArray = 0;
let indexText = 0;
const addLetter = () => {
    spnText.textContent += txt[indexArray][indexText];
    indexText++;
    if (indexText === txt[indexArray].length) {
        indexArray++;
        if (indexArray === txt.length) return
        return setTimeout(() => {
            spnText.textContent = "";
            indexText = 0;
            addLetter();
        }, 1000)
    }
    setTimeout(addLetter, 50);
};
addLetter();

// const cursorAnimation = () => {
//     spnCursor.classList.toggle('active');
// }
// setInterval(cursorAnimation, 400);