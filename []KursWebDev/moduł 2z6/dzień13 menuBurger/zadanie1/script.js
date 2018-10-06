var $menu = $('.on');

$(function () {
    $menu.removeClass('on');
})


const oN = document.querySelectorAll('.activate');
const init = document.querySelector('.burger');

init.addEventListener('click', function () {
    for (let i = 0; i < oN.length; i++)
        oN[i].classList.toggle('on');
});