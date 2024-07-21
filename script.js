const todoForm = document.getElementById('todo-form');
const todoTaskInput = document.getElementById('todo-task-name');
const todoActionContext = document.getElementById('todo-action-context');
const todoEditItem = document.getElementById('todo-edit-item');
const todoList = document.getElementById('todo-list');

let editBTN = document.querySelector('edit-btn');

todoForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const taskName = todoTaskInput.value;
  const actionContext = todoActionContext.value;

  if (actionContext === 'create') {
    addTask(taskName);
  } else {
    const editItemID = todoEditItem.value;
    editTask(editItemID, taskName);
  }

  // clear input value after form is submitted
  todoTaskInput.value = "";
})

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

const editTask = (itemID, taskName) => {
  const editElement = document.getElementById(itemID);
  const editElementText = editElement.getElementsByTagName("p")[0];
  editElementText.innerText = taskName;

  // Change action context
  todoActionContext.value = 'create';
}

const editAction = (e) => {
  const parentOfCurrent = e.target.parentElement;
  const currentEditBtn = e.target;
  const currentBtnClass = currentEditBtn.className;
  
  if (currentBtnClass === 'edit-btn') {
    // Change the form context
    todoActionContext.value = 'edit'

    const currentTaskName = parentOfCurrent.getElementsByTagName("p")[0].innerText;
    const currentTaskID = parentOfCurrent.id;

    todoTaskInput.value = currentTaskName;
    todoEditItem.value = currentTaskID;
  }

}

// Count total todo items on screen
const countItems = () => {
  const allTodoItems = todoList.querySelectorAll('.todo-item');
  return allTodoItems.length;
}

document.addEventListener("click", editAction);