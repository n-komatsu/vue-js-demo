<template>
  <div>
    <h1>Markdown editor</h1>
    <div class="my-markdown-wrapper">
      <textarea v-bind:value="markdown" class="my-markdown" @input="update"></textarea>
      <div class="my-markdown-preview" v-html="compiledMarkdown"></div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
import marked from 'marked';

export default {
  data: () => {
    return {
      markdown: '',
    }
  },
  computed: {
    compiledMarkdown: function() {
      return marked(this.markdown, { sanitize: true });
    }
  },
  methods: {
    update: _.debounce(function(e){
      this.markdown = e.target.value;
    }, 300),
  }
}
</script>

<style scoped>
  * {
    box-sizing: border-box;
  } 
  .my-markdown-wrapper {
    display: flex;
  }
  .my-markdown {
    width: 50%;
    height: 100vh;
    resize: none;
    outline: none;
    font-size: 16px;
  }
  .my-markdown-preview {
    font-size: 16px;
    width: 50%;
  }
</style>



