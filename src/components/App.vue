<template>
  <div>
    <h1>Hello Vue</h1>
    <button 
    id="show-modal"
    @click="showModal = true"
    >
      Show Modal
    </button>
    <my-modal 
      v-if="showModal"
      @close="showModal = false"
    >
      <h3 slot="header">custom header</h3>
    </my-modal>
  </div>
</template>

<script>
import MyModal from 'Components/Modal';

export default {
  data() {
    return {
      showModal: false,
    }
  },
  components: {
    MyModal
  },
}
</script>

