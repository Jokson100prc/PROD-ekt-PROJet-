const basement = (parametr = 0) => {
    let seconds = parametr;
    document.body.style.fontSize = '50px';
    document.body.textContent = `You are ${seconds} second on the page!`
    return setInterval(() => {
        seconds++;
        document.body.style.fontSize = '50px';
        document.body.textContent = `You are ${seconds} second on the page!`;
    }, 1000);
}

const showTimer = basement();

const basementB = (parametrB = 0) => {
    const h1 = document.createElement('h1');
    const div = document.createElement('div');

    h1.style.marginTop = '100px';
    h1.style.color = 'brown';
    h1.style.fontSize = '34px';
    h1.textContent = `SetInterval function at the top was called outside basement function.
    Function setInterval below was called outside basement function`;
    let secondsB = parametrB;
    div.style.fontSize = '50px';
    div.textContent = `You are ${secondsB} second on the page!`;
    document.body.appendChild(h1);
    document.body.appendChild(div);
    const timerB = () => {
        const h1 = document.createElement('h1');
        const div = document.createElement('div');
        h1.style.marginTop = '100px';
        h1.style.color = 'brown';
        h1.style.fontSize = '34px';
        h1.textContent = `SetInterval function at the top was called outside basement function.
        Function setInterval below was called outside basement function`;
        document.body.appendChild(h1);
        document.body.appendChild(div);
        secondsB++;
        div.style.fontSize = '50px';
        div.textContent = `You are ${secondsB} second on the page!`;
    };
    return timerB
}

const showTimerB = basementB();

setInterval(showTimerB, 1000);