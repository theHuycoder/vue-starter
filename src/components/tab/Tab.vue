<template>
  <div>{{ label }}</div>
</template>

<script lang="ts">
import { defineComponent, inject, ref, onBeforeMount, watch } from 'vue';
import { TabProviderToken, TabsState } from './token-providers';

type TabProps = {
  label?: string;
  name?: string;
};

export default defineComponent<TabProps>({
  name: 'Tab',
  setup(props, context) {
    const index = ref(0);
    const isActive = ref(false);
    const tabsState = inject(TabProviderToken.STATE_OF_TABS) as TabsState;

    watch(
      () => tabsState.selectedIndex,
      () => {
        isActive.value = tabsState.selectedIndex === index.value;
      },
    );

    onBeforeMount(() => {
      index.value = tabsState.tabCount;
      tabsState.tabCount += 1;
      isActive.value = tabsState.selectedIndex === index.value;
    });

    return {
      isActive,
    };
  },
});
</script>

<style scoped></style>
