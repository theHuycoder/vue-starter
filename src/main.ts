import { createApp } from 'vue';
import { createPinia } from 'pinia';
import '@/styles/global.scss';
import router from '@/router';
import App from '@/App.vue';

createApp(App).use(createPinia()).use(router).mount('#app');
