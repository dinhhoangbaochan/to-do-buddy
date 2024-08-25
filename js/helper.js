// Count total todo items on screen
export const countItems = (list) => {
  const allTodoItems = list.querySelectorAll('.todo-item');
  return allTodoItems.length;
}