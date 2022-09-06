import type { AppRouteRecordRaw, AppRouteModule } from '/@/router/types';

import { PAGE_NOT_FOUND_ROUTE, REDIRECT_ROUTE } from '/@/router/routes/basic';

import { PageEnum } from '/@/enums/pageEnum';

const modules = import.meta.globEager('./modules/**/*.ts');

const routeModuleList: AppRouteModule[] = [];

Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

export const asyncRoutes = [PAGE_NOT_FOUND_ROUTE, ...routeModuleList];

export const RootRoute: AppRouteRecordRaw = {
  path: '/',
  name: 'Root',
  redirect: PageEnum.BASE_HOME,
  meta: {
    title: 'Root',
  },
};

export const RedisNormalRoute: AppRouteRecordRaw = {
  path: '/redis/normal',
  name: 'RedisNormal',
  component: () => import('/@/views/redis/Normal.vue'),
  meta: {
    title: '正常队列',
  },
};

export const RedisNormalViewRoute: AppRouteRecordRaw = {
  path: '/redis/normal/:id',
  name: 'RedisNormalView',
  component: () => import('/@/views/redis/NormalView.vue'),
  meta: {
    title: '正常队列消息',
  },
};

export const RedisDelayRoute: AppRouteRecordRaw = {
  path: '/redis/delay',
  name: 'Delay',
  component: () => import('/@/views/redis/Delay.vue'),
  meta: {
    title: '延迟队列消息',
  },
};

export const RedisFailedRoute: AppRouteRecordRaw = {
  path: '/redis/failed',
  name: 'Failed',
  component: () => import('/@/views/redis/Failed.vue'),
  meta: {
    title: '失败队列消息',
  },
};

// Basic routing without permission
export const basicRoutes = [
  RedisNormalRoute,
  RedisNormalViewRoute,
  RedisDelayRoute,
  RedisFailedRoute,
  RootRoute,
  REDIRECT_ROUTE,
  PAGE_NOT_FOUND_ROUTE,
];
