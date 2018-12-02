const btn = document.querySelector('button');
const li = document.querySelectorAll('li');

function btnLoad() {
    btn.textContent = "click me!";
    btn.style.fontSize = '30px';
};
btn.addEventListener('load', btnLoad());


let fSize = 10;



// dodanie elementów za pomocą forEACH()


// btn.addEventListener('click', function () {
//     li.forEach(function (l) {
//         l.style.display = 'block';
//         l.style.fontSize = fSize + "px";
//     });
//     fSize++;
// });



//dodanie elementów za pomocą FOR


btn.addEventListener("click", () => {
    for (let i = 0; i < li.length; i++) {
        if (!li[i].style.display) {
            li[i].style.display = 'block';
            console.log('blOK');
        }
        li[i].style.fontSize = fSize + "px";
        console.log(`${fSize} - ok`);

    }
    fSize++;
});