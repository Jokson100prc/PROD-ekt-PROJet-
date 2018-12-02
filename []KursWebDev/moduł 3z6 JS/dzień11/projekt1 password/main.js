const input = document.querySelector('input');
const message = document.querySelector('.message');


const pass = 'new';


input.addEventListener('keydown', (e) => {
    console.log(e.target, e.which); // e.target & keyCode
    console.log(e.target.value); // value is input content
    if (e.target.value === pass && e.keyCode === 13) {
        message.textContent = "It is work!"
        //    message.classList = "active";
        input.value = '';
    } else {
        message.textContent = "";
    }
})


input.addEventListener('focus', (e) => {
    e.target.classList.add('active');
});


input.addEventListener('blur', (e) => {
    e.target.classList.remove('active');
});


// input.addEventListener('keyup', () => {
//     console.log(input.value); // value is input content
//     if (input.value == pass) {
//         message.textContent = "It is work!"
//         message.classList = "active";
//         input.value = '';
//     } else {
//         message.textContent = "";
//     }
// })