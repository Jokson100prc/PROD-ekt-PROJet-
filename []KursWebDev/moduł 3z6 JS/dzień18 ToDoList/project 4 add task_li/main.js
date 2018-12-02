const inputTask = document.querySelector('.inputTask');
const taskBtn = document.querySelector('.addTask');
const h1 = document.querySelector('h1');
const taskNumber = document.querySelector('span');
const ul = document.querySelector('ul');
const liTasks = document.getElementsByClassName('liTask');


let number = 0;
const addTaskLi = (e) => {
    e.preventDefault();
    let addingTask = inputTask.value;
    if (addingTask == "") {
        return alert('You can not add an empty task')
    };
    number++;
    const li = document.createElement('li');
    li.className = 'liTask';
    li.innerHTML = `${addingTask} - task ${number} <button>Delete task ${number}</button>`;
    ul.appendChild(li);
    taskNumber.textContent = liTasks.length;
    inputTask.value = '';
    li.querySelector('button').addEventListener('click', deleteTask);
}
taskBtn.addEventListener('click', addTaskLi);

const deleteTask = (e) => {
    e.target.parentNode.remove();
    taskNumber.textContent = liTasks.length;
};