function x() {
    let number = 0;
    number++
    function y() {
        console.log(number);
    }
    return y
}

const example = x();




const add = (start = 0) => {
    number = start;
    document.body.style.fontSize = '50px';
    document.body.textContent = `current click number is ${number}`
    return () => {
        number++;
        document.body.style.fontSize = '50px';
        document.body.textContent = `current click number is ${number}`
    }
};

const counter = add();
document.body.addEventListener('click', counter);