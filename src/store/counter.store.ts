import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    counter: 0,
  }),
  actions: {
    changeCounter(val: number) {
      this.counter += val;
    },
  },
});
