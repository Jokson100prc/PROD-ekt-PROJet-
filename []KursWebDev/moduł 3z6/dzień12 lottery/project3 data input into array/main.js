const btn = document.querySelector('button');
const div = document.querySelector('div');
const names = [];
const dataInput = (e) => {
    e.preventDefault();
    const input = document.querySelector('input');
    const newName = input.value;
    if (newName.length) {
        for (name of names) {
            if (name === newName)
                return
        }
        names.push(newName);
        div.textContent += newName + ", ";
        input.value = '';
        console.log(names);
    }
}

btn.addEventListener('click', dataInput);