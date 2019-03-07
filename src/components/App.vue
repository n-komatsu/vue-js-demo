<template>
  <div class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <my-add-todo
        @add-todo="addTodo"
      ></my-add-todo>
    </header>
    <section class="main" v-show="todos.length" v-cloak>
      <input class="toggle-all" type="checkbox" v-model="allDone">
      <ul class="todo-list">
        <my-todo-list v-for="todo in filteredTodos"
          :todo="todo"
          :key="todo.id"
          :edited-todo="editedTodo"
          @done-edit="doneEdit"
          @edit-todo="editTodo"
          @cancel-edit="cancelEdit"
          @remove-todo="removeTodo"
        ></my-todo-list>
      </ul>
      <div class="footer"
        v-show="todos.length"
        v-cloak
      >
        <span class="todo-count">
          <strong>{{ remaining }}</strong>
          {{ remaining | pluralize }} left
        </span>
        <ul class="filters">
          <my-filter
            v-for="(filterType, index) in filterTypes"
            :key="index"
            :filterType="filterType"
            :visibility="visibility"
          >
          </my-filter>
        </ul>
        <button
          class="clear-completed"
          @click="removeCompleted"
          v-show="todos.length > remaining"
        >
          Clear Completed
        </button>
      </div>
    </section>
    <footer class="info">
      <p>Double-click to edit a todo</p>
    </footer>
  </div>
</template>

<script>
import todoStrage from '../utils/todoStrage';
import filters from '../utils/visibilityFilters';
import MyAddTodo from './AddTodo';
import MyTodoList from './TodoList';
import MyFilter from './Filter';

export default {
  props: {
    visibility: String,
  },
  data() {
    return {
      todos: todoStrage.fetch(),  
      newTodo: '',
      editedTodo: null,
      filterTypes: [
        'all',
        'active',
        'completed'
      ]
    }
  },
  methods: {
    addTodo(newTodo) {
      const value = newTodo && newTodo.trim();
      if(!value) return;
      this.todos = [
        ...this.todos,
        {
          uid: this.todos.uid++,
          title: value,
          completed: false,
        }
      ]
    },
    editTodo(todo) {
      this.beforeEditCache = todo.title;
      this.editedTodo = todo;
    },
    doneEdit(todo) {
      if(!this.editedTodo) {
        return;
      }
      this.editedTodo = null;
      todo.title = todo.title.trim();
      if(!todo.title) {
        this.removeTodo(todo);
      }
    },
    cancelEdit(todo) {
      this.editedTodo = null;
      todo.title = this.beforeEditCache;
    },
    removeTodo(todo) {
      this.todos.splice(this.todos.indexOf(todo), 1);
    },
    removeCompleted() {
      this.todos = filters.active(this.todos);
    },
  },
  watch: {
    todos: {
      handler(todos) {
        todoStrage.save(todos);
      },
      deep: true,
    }
  },
  computed: {
    filteredTodos() {
      return filters[this.visibility](this.todos);
    },
    remaining() {
      return filters.active(this.todos).length
    },
    allDone: {
      get() {
        return this.remaining === 0;
      },
      set(value) {
        this.todos.forEach(todo => {
          todo.completed = value
        });
      }
    }
  },
  filters: {
    pluralize(n) {
      return n === 1 ? 'item' : 'items'
    }
  },
  components: {
    MyAddTodo,
    MyTodoList,
    MyFilter,
  }
}
</script>

<style scoped>
  [v-cloak] {
    display: none;
  }
</style>

