const todoForm = document.getElementById('to-do-form');
const inputTask = document.getElementById('input-task');

todoForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const taskName = inputTask.value;

  console.log(inputTask.value);
  console.log('Form is being submitted')
})

