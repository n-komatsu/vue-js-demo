<template>
  <li>
    <a
      :href="`#${filterType}`"
      :class="{ selected: visibility == filterType }"
    >
      {{filterType}}
    </a>
  </li>
</template>

<script>
export default {
  props: {
    filterType: String,
    visibility: String,
  }
}
</script>

