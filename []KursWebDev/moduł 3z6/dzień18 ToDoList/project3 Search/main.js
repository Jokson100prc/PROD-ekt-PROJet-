const input = document.querySelector('input');
const liList = document.querySelectorAll('li');
const ul = document.querySelector('ul');

const searchEngin = (e) => {
    const query = e.target.value.toLowerCase();
    const liTasksArr = [...liList];
    const searchResult = liTasksArr.filter(li => li.textContent.toLowerCase().includes(query));
    ul.textContent = "";
    searchResult.forEach(li => ul.appendChild(li))
    console.log(searchResult);
}
input.addEventListener('input', searchEngin);