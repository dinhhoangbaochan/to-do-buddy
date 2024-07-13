const todoForm = document.getElementById('todo-form');
const todoTaskInput = document.getElementById('todo-task-name');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const taskName = todoTaskInput.value;
  addTask(taskName);
  todoTaskInput.value = "";
})

const addTask = (taskName) => {
  const todoItem = document.createElement("div");
  todoItem.innerHTML = `<p>${taskName}</p>`
  todoList.appendChild(todoItem);
}

