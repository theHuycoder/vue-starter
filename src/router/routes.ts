import { RouteRecordRaw } from 'vue-router';
import Homepage from '@/pages/Homepage.vue';

export enum EnumRouteNames {
  HOMEPAGE = 'routes/homepage',
}

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: EnumRouteNames.HOMEPAGE,
    component: Homepage,
  },
];
