<template>
  <g>
    <polygon :points="points"></polygon>
    <circle cx="100" cy="100" r="80"></circle>
  </g>
</template>

<script>
export default {
  props: {
    'stats': Array,
  },
  computed: {
    points() {
      const total = this.stats.length;
      //callback関数内ではthisをVueインスタンスにbindする
      return this.stats.map(function(stat, index) {
        const point = this.valueToPoint(stat.value, index, total);
        return point.x + ',' + point.y;
      }).join(' ');
    }
  },
  methods: {
    valueToPoint(value, index, total) {
      const x = 0;
      const y = -value * .8;
      const angle = Math.PI * 2 / total * index;
      const cos   = Math.cos(angle);
      const sin   = Math.sin(angle);
      const tx    = x * cos - y * sin + 100;
      const ty    = x * sin + y * cos + 100;
      return {
        x: tx,
        y: ty
      }
    }
  }
}
</script>

<style scoped>
  polygon {
      fill: #42b983;
      opacity: .75;
  }

  circle {
      fill: transparent;
      stroke: #999;
  }
</style>


