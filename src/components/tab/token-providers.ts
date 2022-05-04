import { VNode } from 'vue';

export enum TabProviderToken {
  STATE_OF_TABS = 'state_of_tabs',
}

export type TabsState = {
  tabs: VNode[];
  selectedIndex: number;
  tabCount: number;
};
