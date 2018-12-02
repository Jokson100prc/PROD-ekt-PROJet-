setInterval(() => {
    const time = new Date;
    const houres = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
    const minutes = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
    const seconds = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();

    const clock = document.querySelector('h1');
    clock.textContent = `${houres}:${minutes}:${seconds}`
}, 1000);