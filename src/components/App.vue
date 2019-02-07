<template>
  <div>
    <h1>Hello Vue</h1>
    <ul>
      <template v-for="todo in todos">
        <my-todo 
          v-bind:key="todo.todoId"
          :todo="todo"
          @toggle-click="toggleTodo"
        ></my-todo>
      </template>
    </ul>
    <my-add-todo 
      v-on:add-todo="addTodo"
    ></my-add-todo>
  </div>
</template>
<script>
import MyTodo from 'Components/Todo';
import MyAddTodo from 'Components/AddTodo';

export default {
  data: () => {
    return {
      todos: [
        {
          todoId: 1,
          title: 'はじめてのVue.js',
          complete: false,

        },
        {
          todoId: 2,
          title: '単一ファイルコンポーネント',
          complete: true,
        }
      ],
      todoId: {
        id: 2,
      },
    }
  },
  components: {
    MyTodo,
    MyAddTodo,
  },
  methods: {
    toggleTodo(todo) {
      todo.complete = !todo.complete;
    },
    addTodo(title) {
      this.todoId.id++;
      this.todos = [
        ...this.todos,
        {
          todoId: this.todoId.id,
          title: title,
          complete: false,
        }
      ]
    }
  }
}
</script>
