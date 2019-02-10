<template>
  <div>
    <h1>Hello Vue</h1>
    <form id="search">
      <input name="query" v-model="searchQuery">
    </form>
    <my-grid 
      :data="gridData"
      :columns="gridColumns"
      :filter-key="searchQuery"
    ></my-grid>
  </div>
</template>

<script>
import MyGrid from 'Components/Grid';

export default {
  data: () => {
    return {
      searchQuery: '',
      gridColumns: ['name', 'power'],
      gridData: [
        { name: 'Chuck Norris', power: Infinity },
        { name: 'Bruce Lee', power: 9000 },
        { name: 'Jackie Chan', power: 7000 },
        { name: 'Jet Li', power: 8000 }
      ],
    }
  },
  components: {
    MyGrid,
  },
}
</script>
