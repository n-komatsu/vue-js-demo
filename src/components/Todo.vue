<template>
  <li>
    <a class="todo" href=""
      @click.prevent="handleClick"
      v-bind:class="{ 'is-complete': todo.complete }"
    >
      {{ todo.title }}
    </a>
  </li>
</template>

<script>
export default {
  props: {
    todo: Object,
  },
  methods: {
    handleClick() {
      this.$emit('toggle-click', this.todo);
    }
  }
}
</script>

<style scoped>
  a {
    text-decoration: none;
    color: #000;
  }
  .todo {
    display: inline-block;
  }
  .is-complete {
    text-decoration: line-through;
  }
</style>
