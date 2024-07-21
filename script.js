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


/**
 * What do we want?
 * When a task name is written, then submit
 * Count the total tasks existing on screen
 * Get the total, assign an id to being added item using that number plus one
 * 
 * But, we need to know, if we are adding a new one or we are editting an existing one.
 * So, in our form, we have a hidden input field to check for the form's action
 * Before performing action, check the action type.
 */
const addTask = (taskName) => {
  const todoItem = document.createElement("div");
  const currentTotal = countItems();
  const itemID = `item-${currentTotal + 1}`

  todoItem.classList.add("todo-item");
  todoItem.id = itemID;
  todoItem.innerHTML = `
    <p>${taskName}</p>
    <a class="edit-btn">Edit</a>
    <a class="delete-btn">Delete</a>
  `;

  todoList.appendChild(todoItem);
}

const editAction = (e) => {
  const parentOfCurrent = e.target.parentElement;
  const currentEditBtn = e.target;
  const currentBtnClass = currentEditBtn.className;
  
  if (currentBtnClass === 'edit-btn') {
    const currentTaskName = parentOfCurrent.getElementsByTagName("p")[0].innerText;
    const currentTaskID = parentOfCurrent.id;

    console.log(currentTaskID);
    todoTaskInput.value = currentTaskName;
  }
}

// Count total todo items on screen
const countItems = () => {
  const allTodoItems = todoList.querySelectorAll('.todo-item');
  return allTodoItems.length;
}

document.addEventListener("click", editAction);