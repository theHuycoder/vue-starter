<template>
  <div class="bg-white rounded-md p-6 shadow-md">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Paper',
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
