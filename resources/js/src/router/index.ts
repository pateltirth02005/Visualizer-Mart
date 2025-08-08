import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { useAppStore } from '../stores/index';
import appSetting from '../app-setting';

const routes: RouteRecordRaw[] = [

  {
    path: '/',
    component: () => import('../front/layouts/front-layout.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('../front/pages/index.vue'),
      },
      // You can add more front routes here
    ],
  },

  // Admin routes (with main layout)
  {
    path: '/admin',
    component: () => import('../admin/layouts/app-layout.vue'),
    children: [
      {
        path: 'dashboard',
        name: 'admin-dashboard',
        component: () => import('../admin/views/index.vue'),
        meta: { role: 'admin' },
      },
      {
        path: 'analytics',
        name: 'admin-analytics',
        component: () => import('../admin/views/analytics.vue'),
        meta: { role: 'admin' },
      },
    ],
  },

  {
    path: '/admin/login',
    component: () => import('../admin/layouts/auth-layout.vue'),
    children: [
      {
        path: '',
        name: 'admin-login',
        component: () => import('../admin/views/auth/login.vue'),
      },
    ],
  },




];

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: 'active',
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { left: 0, top: 0 };
    }
  },
});

router.beforeEach(async (to, from, next) => {
  const isAdminRoute = to.path.startsWith('/admin') && to.name !== 'admin-login'
  const token = localStorage.getItem('admin_token')

  if (isAdminRoute && !token) {
    return next({ name: 'admin-login' })
  }

  next()
})
router.afterEach((to, from, next) => {
  appSetting.changeAnimation();
});
export default router;

