// todolist-22ff8 ToDoList
const searchInput = document.querySelector('.inputSearch');
const addTask = document.querySelector('.inputTask');
const searchBtn = document.querySelector('.search');
const taskBtn = document.querySelector('.addTask');
const span = document.querySelector('h1 span');
const ul = document.querySelector('ul');
const fixed = document.querySelector('.fixed');
const arrTask = [];

// the search must be refind - Li elements should be copied, not relocated
const searchEngin = (e) => {
    e.preventDefault();
    const query = searchInput.value.toLowerCase();
    if (query == "" || query == " ")
        return alert("What would You like to find?");

    const copyOfArrTask = arrTask.slice(); //it isn't work
    // console.log(arrTask);
    // console.log(copyOfArrTask);
    const answer = copyOfArrTask.filter(li => li.textContent.toLowerCase().includes(query));
    // console.log(answer);
    answer.forEach(x => fixed.cloneNode().innerHtml = x);
    fixed.style.display = "block";
    if (arrTask.length == 0) {
        fixed.style.display = "none";
        searchInput.value = "";
    }
}
searchBtn.addEventListener('click', searchEngin);

const deleteTask = (e) => {
    e.preventDefault();
    const task = e.target;
    task.parentNode.remove();
    arrTask.splice(task, 1);
    span.textContent = arrTask.length;
}

key = 0;
const createTask = (e) => {
    e.preventDefault();
    key++;
    if (addTask.value == "" || addTask.value == " ") {
        return alert('fill "Add task"');
    };
    const task = document.createElement("li");
    arrTask.push(task);
    task.innerHTML = `${addTask.value} <button data-key="${key}" type = "reset">delete</button>`;
    task.setAttribute("data-key", `${key}`);
    ul.appendChild(task);
    addTask.value = "";
    const delBtn = task.querySelector('button');
    span.textContent = arrTask.length;

    delBtn.addEventListener('click', deleteTask);
};
taskBtn.addEventListener('click', createTask);