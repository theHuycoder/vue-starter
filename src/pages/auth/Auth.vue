<template>
  <div class="w-full min-h-screen pt-12">
    <div class="w-[30rem] mx-auto">
      <paper class="mb-5">
        <tabs @switch-tab="switchTab">
          <tab label="Sign In" :name="AuthTabNames.SIGN_IN"></tab>
          <tab label="Sign Up" :name="AuthTabNames.SIGN_UP"></tab>
        </tabs>
      </paper>
      <paper>
        <sign-in v-if="activeTab === AuthTabNames.SIGN_IN"></sign-in>
        <sign-up v-if="activeTab === AuthTabNames.SIGN_UP"></sign-up>
      </paper>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Paper from '@/components/paper/Paper.vue';
import Tabs from '@/components/tab/Tabs.vue';
import Tab from '@/components/tab/Tab.vue';
import SignIn from '@/pages/auth/SignIn.vue';
import SignUp from '@/pages/auth/SignUp.vue';

enum AuthTabNames {
  SIGN_IN = 'auth/sign-in',
  SIGN_UP = 'auth/sign-up',
}

export default defineComponent({
  name: 'Auth',
  components: {
    Paper,
    Tabs,
    Tab,
    SignIn,
    SignUp,
  },
  setup(props, context) {
    const activeTab = ref<AuthTabNames>(AuthTabNames.SIGN_IN);

    function switchTab(nextTab: AuthTabNames) {
      activeTab.value = nextTab;
    }

    return {
      activeTab,
      switchTab,
      AuthTabNames,
    };
  },
});
</script>

<style lang="scss" scoped></style>
