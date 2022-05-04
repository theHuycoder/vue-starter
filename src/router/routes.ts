import { RouteRecordRaw } from 'vue-router';
import Homepage from '@/pages/home/Homepage.vue';
import AuthPage from '@/pages/auth/Auth.vue';

export enum EnumRouteNames {
  HOMEPAGE = 'routes/homepage',
  AUTH = 'routes/auth',
}

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: {
      name: EnumRouteNames.AUTH,
    },
  },
  {
    path: '/auth',
    name: EnumRouteNames.AUTH,
    component: AuthPage,
  },
];
