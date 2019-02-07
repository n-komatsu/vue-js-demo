<template>
  <div>
    <!-- v-model.trim...空白を取り除いてくれる修飾子 -->
    <input v-model.trim="title" placeholder="...edit">
    <!-- @click...v-on:clickの省略記法 -->
    <a href="" @click.prevent="handleClick">作成</a>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      title: '',
    }
  },
  methods: {
    handleClick() {
      if(this.title === '') return;
      this.$emit('add-todo', this.title);
    }
  }
}
</script>

