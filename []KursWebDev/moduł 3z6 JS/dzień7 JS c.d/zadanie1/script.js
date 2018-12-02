const header = document.createElement('header');
document.body.appendChild(header);
document.body.style.height = 10000 + "px";
header.style.position = "fixed";
header.style.top = 0;
header.style.left = 0;


const hdWidth = 100;
let hdHeight = 100;
grow = true;

header.style.width = hdWidth + "%";
header.style.height = hdHeight + "px";

window.addEventListener('scroll', function () {

    if (hdHeight > window.innerHeight / 2) {
        grow = !grow
    } else if (hdHeight <= 0) {
        grow = !grow
    };

    if (grow) {
        hdHeight += 10;
        header.style.height = hdHeight + "px";
        header.style.backgroundColor = "green";
    } else if (!grow) {
        hdHeight -= 10;
        header.style.height = hdHeight + "px";
        header.style.backgroundColor = "crimson";
    }
    console.log(window.innerHeight / 2);
    console.log(hdHeight);
})