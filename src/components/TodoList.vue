<template>
  <li
    class="todo"
    :key="todo.id"
    :class="{ completed: todo.completed, editing: todo == editedTodo }"
  >
    <div class="view">
      <input class="toggle" type="checkbox" v-model="todo.completed">
      <label @dblclick="editTodo(todo)">{{ todo.title }}</label>
      <button class="destroy" @click="removeTodo(todo)"></button>
    </div>
    <input class="edit" type="text"
      v-model="todo.title"
      v-todo-focus="todo === editedTodo"
      @blur="doneEdit(todo)"
      @keypress.enter="doneEdit(todo)"
      @keypress.esc="cancelEdit(todo)"
    >
  </li>
</template>
<script>
export default {
  props: {
    todo: Object,
    editedTodo: Object,
  },
  methods: {
    doneEdit(todo) {
      this.$emit('done-edit', todo);
    },
    editTodo(todo) {
      this.$emit('edit-todo', todo);
    },
    cencelEdit(todo) {
      this.$emit('cancel-edit', todo);
    },
    removeTodo(todo) {
      this.$emit('remove-todo', todo);
    }
  },
  directives: {
    'todo-focus': function(el,bindings) {
      if(bindings.value) {
        el.focus();
      }
    }
  },
}
</script>

