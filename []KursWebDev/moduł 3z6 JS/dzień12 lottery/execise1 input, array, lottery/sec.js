const options = ['opcja1', 'opcja2'];
const addBtn = document.querySelector('.add');
const resetBtn = document.querySelector('.clean');
const showOptionsBtn = document.querySelector('.showOptions');
const showAdviceBtn = document.querySelector('.showAdvice');

const getText = (e) => {
    e.preventDefault();
    const input = document.querySelector('input');
    options.push(input.value);
    input.value = '';
};
addBtn.addEventListener('click', getText);

const clean = (e) => {
    e.preventDefault();
    options.length = 0;
    const h1 = document.querySelector('h1');
    h1.innerText = "";
}
resetBtn.addEventListener('click', clean)

const showAdvice = () => {
    const h1 = document.querySelector('h1');
    const index = Math.floor(Math.random() * options.length);
    h1.innerText = options[index];
}
showAdviceBtn.addEventListener('click', showAdvice);

const showOptions = () => {
    alert(options)
};
showOptionsBtn.addEventListener('click', showOptions);