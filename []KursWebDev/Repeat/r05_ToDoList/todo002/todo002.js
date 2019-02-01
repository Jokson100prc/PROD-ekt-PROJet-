const taskBox = ["add tasks", "remove tasks"];

const ul = document.querySelector("ul");
const btnAddTask = document.querySelector("#addBtn");
const btnRemTask = document.querySelector("#removeBtn");
const input = document.querySelector(".inputTask");
const taskLi = document.querySelector("li");
const form = document.querySelector("form");
const btns = document.querySelectorAll("button");

// console.log(taskBox + ul + btnAddTask + input + taskLi + form);

const arr = taskBox;

function btnPreventD(e) {
  e.preventDefault();
}
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", btnPreventD);
}

taskPrinter = () => {
  arr.forEach(task => {
    const li = document.createElement("li");
    ul.appendChild(li);
    li.textContent = task;
  });
};
taskPrinter();

removeTask = e => {
  // document.body.style.backgroundColor = "red"
  e.preventDefault();
  //   return function simply() {
  arr.forEach(task => task.split(0, 1));
  //   };
};
btnRemTask.addEventListener("click", removeTask);

// const someNew = removeTask.simply;
// console.log(someNew);
