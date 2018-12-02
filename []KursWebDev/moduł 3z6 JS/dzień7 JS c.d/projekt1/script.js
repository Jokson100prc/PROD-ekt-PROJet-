const div = document.createElement('div');
document.body.appendChild(div);
let grow = true;
let value = 100;
div.style.height = value + "px";
div.style.width = value + "px";

window.addEventListener('scroll', function () {

    if (grow) {
        value += 10;
        div.style.height = value + "px";
        div.style.width = value + "px";
    } else {
        value -= 10;
        div.style.height = value + "px";
        div.style.width = value + "px";
    }

    if (value >= window.innerWidth * 0.5) {
        grow = !grow;
    } else if (value == 0) {
        grow = !grow;
    }
})