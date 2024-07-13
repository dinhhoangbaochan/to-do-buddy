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
  todoItem.innerHTML = `
    <p>${taskName}</p>
    <a class="edit-btn">Edit</a>
    <a class="delete-btn">Delete</a>
  `
  todoList.appendChild(todoItem);
}

const editAction = (e) => {
  const currentItem = e.target;
  const itemClassName = currentItem.className;
  if (itemClassName === 'edit-btn')
  console.log(e.target.parentElement)
}

document.addEventListener("click", editAction);