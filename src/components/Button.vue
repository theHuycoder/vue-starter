<template>
  <button v-bind="attributes">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'CustomButton',
  setup(props, context) {
    const attributes = computed(() => ({ ...context.attrs }));
    return {
      attributes,
    };
  },
});
</script>

<style scoped></style>
