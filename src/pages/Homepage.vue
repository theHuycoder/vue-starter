<template>
  <div class="">
    <h2>This is homepage</h2>
    <p>Counter: {{ countStore.counter }}</p>
    <custom-button @click="changeCounter(1)">click</custom-button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useCounterStore } from '@/store/counter.store';
import CustomButton from '@/components/Button.vue';

export default defineComponent({
  components: {
    CustomButton,
  },
  name: 'Home',
  setup() {
    const countStore = useCounterStore();

    function changeCounter(val: number) {
      countStore.changeCounter(val);
    }

    return { countStore, changeCounter };
  },
});
</script>

<style scoped></style>
