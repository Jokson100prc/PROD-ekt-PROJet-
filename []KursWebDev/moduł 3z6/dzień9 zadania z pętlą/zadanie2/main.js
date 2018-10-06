let size = 10;
let orderElement = 1;

const init = () => {
    const btn = document.createElement('button');
    document.body.appendChild(btn);
    const ul = document.createElement('ul');
    document.body.appendChild(ul);

    btn.style.fontSize = size * 3 + 'px';
    btn.textContent = "Dodaj 10 elementów listy";
    btn.addEventListener('click', createLiElements);






    const X = document.createElement('button');
    document.body.appendChild(X);
    X.style.fontSize = size * 3 + 'px';
    X.textContent = "DELETE ALL!";
    X.style.position = "fixed";
    X.style.top = `${size*5}%`;
    X.style.right = "5px";


    X.addEventListener('click', cleanList);

    // NIE WIEM JAK PRZYPISAĆ PUSTY "" DO HREF !!!

    // const aHref = document.createElement('a');
    // X.appendChild(aHref)
    // aHref.href = "javascript:void(0)";
    // document.body.appendChild(aHref);
};

const createLiElements = () => {
    for (let i = 0; i < 10; i++) {
        const getUl = document.querySelector('ul')

        const liElement = document.createElement('li');
        liElement.style.fontSize = `${++size}px`;
        liElement.textContent = `Element nr - ${orderElement++}`;

        const createTen = getUl.appendChild(liElement);
        createTen[i];

    }
}

const cleanList = () => {

    size = 10;
    orderElement = 1;
    document.querySelector('ul').textContent = "";
}

init()