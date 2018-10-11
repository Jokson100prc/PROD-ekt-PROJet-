const input = document.querySelector('input');
const txtBox = document.querySelector('.answer');

const passwords = ['old', 'poland', 'capoeira', 'programming', 'life', 'flower', 'Marcia', 'yes', 'no'];
const answers = ['wine', 'home', 'passion', 'emaizing', 'happyness', 'colors and beautyfull', 'Did you\'ve learned English?', 'Good! English is a powerful key', 'I know You did ;)'];

input.addEventListener('keyup', (e) => {

    const inputContent = e.target.value

    txtBox.textContent = '';
    passwords.forEach((password, index) => {

        if (inputContent === password && e.keyCode === 13) {
            txtBox.textContent = answers[index];
            input.value = "";
        }

    })
})

input.addEventListener('focus', () => {
    input.style.backgroundColor = "rgba(250, 169, 6, .85)";

})
input.addEventListener('blur', () => {
    input.style.backgroundColor = "";
})