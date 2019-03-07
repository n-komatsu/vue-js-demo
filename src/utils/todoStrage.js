export default {
  fetch() {
    const STORAGE_KEY = 'todos-vuejs-2.0';
    const todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    todos.forEach((todo,index) => {
      todo.id = index;
    });
    todos.uid = todos.length;
    return todos;
  },
  save(todos) {
    const STORAGE_KEY = 'todos-vuejs-2.0';
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }
}