const resetBtn = document.querySelector('.reset');
const timeBox = document.querySelector('.time div');
const startBtn = document.querySelector('.start');

let time = 0;
let active = false;
let idInterval;

const start = () => {
    if (!active) {
        active = !active;
        startBtn.textContent = 'Pause';
        idInterval = setInterval(timer, 10);
    } else {
        active = !active;
        startBtn.textContent = 'Start';
        clearInterval(idInterval);
    }
};
startBtn.addEventListener('click', start);

const reset = () => {
    time = 0;
    active = false;
    timeBox.textContent = '_ __';
    startBtn.textContent = 'Start';
    clearInterval(idInterval);
};
resetBtn.addEventListener('click', reset);

const timer = () => {
    time++;
    timeBox.textContent = (time / 100).toFixed(2);
};