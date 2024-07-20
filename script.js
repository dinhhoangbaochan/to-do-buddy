const todoForm = document.getElementById('todo-form');
const todoTaskInput = document.getElementById('todo-task-name');
const todoList = document.getElementById('todo-list');

let editBTN = document.querySelector('edit-btn');

todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const taskName = todoTaskInput.value;
  addTask(taskName);
  todoTaskInput.value = "";
})

const addTask = (taskName) => {
  const todoItem = document.createElement("div");
  todoItem.classList.add("todo-item");
  todoItem.innerHTML = `
    <p>${taskName}</p>
    <a class="edit-btn">Edit</a>
    <a class="delete-btn">Delete</a>
  `
  todoList.appendChild(todoItem);
}

const editAction = (e) => {
  const parentOfCurrent = e.target.parentElement;
  const currentItem = e.target;
  const currentItemClass = currentItem.className;
  // const currentItemText = parentOfCurrent;
  
  if (currentItemClass === 'edit-btn') {
    let currentTaskName = parentOfCurrent.getElementsByTagName("p")[0].innerText;

    todoTaskInput.value = currentTaskName;
  }
}

document.addEventListener("click", editAction);