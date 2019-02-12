<template>
  <div>
    <h1>Hello Vue</h1>
    <svg width="200" height="200">
      <my-polygraph 
      :stats="stats"
      ></my-polygraph>
    </svg>
    <div v-for="stat,index in stats"
      :key="index"
    >
    <label>{{ stat.label }}</label>
    <input type="range" v-model="stat.value" min="0" max="100">
    <span>{{ stat.value }}</span>
    <button 
      @click.prevent="remove(stat)"
      class="remove"
    >X</button>
    </div>
    <form id="add">
      <input name="newLabel" v-model="newLabel">
      <button 
        @click="add"
      >Add a stat</button>
    </form>
    <pre id="raw">{{ stats }}</pre>
  </div>
</template>

<script>
import MyPolygraph from 'Components/Polygraph';

export default {
  data() {
    return {
      newLabel: '',
      stats: [
        {
          label: "A",
          value: 100,
        },
        {
          label: "B",
          value: 100,
        },
        {
          label: "C",
          value: 100,
        },
        {
          label: "D",
          value: 100,
        },
        {
          label: "E",
          value: 100,
        },
        {
          label: "F",
          value: 100,
        },
      ]
    }
  },
  components: {
    MyPolygraph
  },
  methods: {
    add() {
      if(!this.newLabel) return;
      this.stats = [
        ...this.stats,
        {
          label: this.newLabel,
          value: 100,
        }
      ]
    },
    remove(stat) {
      if(this.stats.length > 3) {
        this.stats.splice(this.stats.indexOf(stat), 1);
      } else {
        alert('Can\'t delete more!');
      }
    }
  }
}
</script>


<style scoped>
  label {
      display: inline-block;
      margin-left: 10px;
      width: 20px;
  }
  #raw {
    position: absolute;
    top: 0;
    left: 300px;
  }
</style>
