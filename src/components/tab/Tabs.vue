<template>
  <div class="bg-white" :class="{ 'border-b': underline }">
    <ul class="flex items-center gap-2">
      <li
        v-for="(tab, index) in state.tabs"
        :key="index"
        @click="changeTab(index)"
        class="cursor-pointer rounded-lg flex items-center justify-center px-4 py-2 duration-100"
        :class="{ 'bg-primary': state.selectedIndex === index }"
      >
        <p
          class="font-main-medium text-lg m-0"
          :class="{ 'text-white': state.selectedIndex === index }"
        >
          {{ tab.props ? tab.props.label : null }}
        </p>
      </li>
    </ul>
    <!-- <slot></slot> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, provide } from 'vue';
import { TabProviderToken, TabsState } from './token-providers';

export default defineComponent({
  name: 'Tabs',
  props: {
    underline: {
      default: false,
      type: Boolean,
      required: false,
    },
  },
  setup(props, { slots, emit }) {
    const getDefaultSlot = slots.default || (() => []);
    const state = reactive<TabsState>({
      tabs: [],
      selectedIndex: 0,
      tabCount: 0,
    });

    provide(TabProviderToken.STATE_OF_TABS, state);
    onMounted(() => {
      state.tabs = getDefaultSlot().filter((vNode) => {
        const vNodeType = vNode.type;
        if (vNodeType) {
          // @ts-ignore
          return vNodeType.name === 'Tab';
        }
        return false;
      });
    });

    function changeTab(i: number) {
      state.selectedIndex = i;
      emit('switch-tab', state.tabs[i]?.props?.name);
    }

    return {
      state,
      changeTab,
    };
  },
});
</script>

<style scoped></style>
