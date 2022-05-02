import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { routes } from './routes';

export default createRouter({
  history: createWebHistory(),
  routes,
});
