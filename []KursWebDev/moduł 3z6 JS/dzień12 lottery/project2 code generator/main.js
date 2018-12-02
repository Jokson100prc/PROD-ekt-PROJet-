const chars = "abcdefghijklmnopqrstuvwxyz1234567890";

const button = document.querySelector('button');
const section = document.querySelector('section');

const codesNumber = 1000;
const charsNumber = 10;

const codesGenerator = () => {
    for (let i = 0; i < codesNumber; i++) {
        let code = "";
        for (let i = 0; i < charsNumber; i++) {
            const index = Math.floor(Math.random() * chars.length)
            const upperChars = chars.toUpperCase();
            code += upperChars[index];
        }
        const div = document.createElement('div');
        div.textContent = code;
        section.appendChild(div);
    }
}
button.addEventListener('click', codesGenerator);