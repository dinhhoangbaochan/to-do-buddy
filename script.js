import { countItems } from "/js/helper.js";

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

  if (taskName) {
    if (actionContext === 'create') {
      addTask(taskName);
    } else {
      const editItemID = todoEditItem.value;
      editTask(editItemID, taskName);
    }

    // clear input value after form is submitted
    todoTaskInput.value = "";
  } else {
    alert("You have to type something!")
  }

})

const addTask = (taskName) => {
  const todoItem = document.createElement("div");
  const currentTotal = countItems(todoList);
  const itemID = `item-${currentTotal + 1}`

  todoItem.classList.add("todo-item");
  todoItem.id = itemID;
  todoItem.innerHTML = `
    <p>${taskName}</p>
    <a class="edit-btn">Edit</a>
    <a class="delete-btn">Delete</a>
  `;

  todoList.appendChild(todoItem);

  // Store the added task in local storage
  localStorage.setItem(itemID, taskName);
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
  const clickedBtn = e.target;
  const currentBtnClass = clickedBtn.className;
  
  if (currentBtnClass === 'edit-btn') {
    // Change the form context
    todoActionContext.value = 'edit'

    const currentTaskName = parentOfCurrent.getElementsByTagName("p")[0].innerText;
    const currentTaskID = parentOfCurrent.id;

    todoTaskInput.value = currentTaskName;
    todoEditItem.value = currentTaskID;
  }

  if (currentBtnClass === 'delete-btn') {
    parentOfCurrent.remove();
  }

}

document.addEventListener("click", editAction);