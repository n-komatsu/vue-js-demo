export default {
  all(todos) {
    return todos;
  },
  active(todos) {
    return todos.filter(todo => {
      return !todo.completed;
    });
  },
  completed(todos) {
    return todos.filter(todo => {
      return todo.completed;
    });
  }
}