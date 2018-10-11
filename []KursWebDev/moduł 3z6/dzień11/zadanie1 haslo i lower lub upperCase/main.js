const input = document.querySelector("input");
const txtBox = document.querySelector(".answer");
const passwords = ['jedEN', 'DwA', 'tSZy'];
const messages = ["super", "działa!", "trzy!"];


input.addEventListener('focus', () => input.classList.add('active'));
input.addEventListener('blur', () => input.classList.remove('active'));

// .map()
const LCpasswords = passwords.map(item => item.toLowerCase())

const showMessage = (e) => {
    const text = e.target.value.toLowerCase();
    txtBox.textContent = "";
    for (let i = 0; i < LCpasswords.length; i++) {
        if (LCpasswords[i] === text) {
            txtBox.textContent = messages[i];
            input.value = "";
        }
    }
};
input.addEventListener("input", showMessage);




//change array elements

// const showMessage = (e) => {
//     const text = e.target.value;
//     txtBox.textContent = "";
//     passwords.forEach((password, i) => {
//         passwords[i] = password.toLowerCase();

//         if (password === text) {
//             txtBox.textContent = messages[i];
//             input.value = "";
//         };
//     });
// };
// input.addEventListener("input", showMessage);



// basic, optimal

// const showMessage = (e) => {
//     const text = e.target.value.toLowerCase();
//     txtBox.textContent = "";
//     passwords.forEach((password, index) => {

//         pass = password.toLowerCase();
//         // console.log(pass);
//         if (pass === text) {
//             txtBox.textContent = messages[index];
//             input.value = "";
//         };
//     });
// };
// input.addEventListener("input", showMessage);