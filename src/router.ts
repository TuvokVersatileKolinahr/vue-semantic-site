import Vue from 'vue';
import Router from 'vue-router';

import store from '@/store/store';
import Home from '@/views/Home.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { authenticated: false },
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      meta: { authenticated: false },
      component: () =>
        import(/* webpackChunkName: "login" */ '@/views/Login.vue'),
    },
    {
      path: '/about',
      name: 'about',
      meta: { yollo: false },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (
    to.matched.some((record) => {
      if (Object.keys(record.meta).length > 0) {
        if (record.meta.authenticated === false) {
          return false;
        } else {
          return true;
        }
      } else {
        // If there is no meta record
        return true;
      }
    })
  ) {
    if (!store.getters['login/authenticated']) {
      next({ name: 'login', params: { redirect: to.fullPath } });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
