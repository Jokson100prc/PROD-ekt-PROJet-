const taskInterface = document.querySelector('.taskInterface');
const inputTask = document.querySelector('.inputTask');
const submitBtn = document.querySelector('.submitBtn');

const ulForTask = document.querySelector('.ulForTask');
const taskList = document.getElementsByClassName('task');

const btnTaskRemover = document.querySelector('.deleteTask');

const taskCountBox = document.querySelector('.taskCountBox span');



taskRemover = (e) => {

    e.target.parentNode.remove();

}


taskCounter = () => {

    const number = taskList.length;
    taskCountBox.textContent = number;
}


addTaskLi = (e) => {
    e.preventDefault();

    const taskContent = inputTask.value;

    if (taskContent === "" || taskContent === " " || taskContent === "  " || taskContent === "   ") {
        return;
    }

    const liTask = document.createElement('li');
    liTask.className = "task";
    liTask.innerHTML = taskContent + "&nbsp &nbsp;" + "<button class='deleteTask'>Delete task</button>";

    ulForTask.appendChild(liTask);

    inputTask.value = "";
    document.querySelectorAll(".task").forEach(tsk => tsk.querySelector("button").addEventListener('click', taskRemover));
    taskCounter();
}
taskInterface.addEventListener('submit', addTaskLi);