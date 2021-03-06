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
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: () =>
        import(/* webpackChunkName: "login" */ '@/views/Login.vue'),
    },
    {
      path: '/profile',
      name: 'profile',
      component: () =>
        import(/* webpackChunkName: "profile" */ '@/views/Profile.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && !store.getters['login/authenticated']) {
    next({ name: 'login' });
  } else {
    next();
  }
});

export default router;
