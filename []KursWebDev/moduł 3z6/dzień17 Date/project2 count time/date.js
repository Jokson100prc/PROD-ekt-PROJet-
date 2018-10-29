const d = document.querySelector('.d');
const h = document.querySelector('.h');
const m = document.querySelector('.m');
const s = document.querySelector('.s');

setInterval(() => {
    const futureTime = new Date('2019-05-05 12:00:01').getTime();
    const presentTime = new Date().getTime();

    const time = futureTime - presentTime;
    let seconds = Math.floor(time / 1000) % 60;
    let minutes = Math.floor(time / (1000 * 60)) % 60;
    let houres = Math.floor(time / (1000 * 60 * 60)) % 24;
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    houres = houres < 10 ? "0" + houres : houres;

    d.textContent = days;
    h.textContent = houres;
    m.textContent = minutes;
    s.textContent = seconds;
}, 1000);