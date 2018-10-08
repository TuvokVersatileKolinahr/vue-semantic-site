import Vue from 'vue';
import router from '@/router';

export default {
  namespaced: true,
  state: {
    authenticated: false,
  },
  mutations: {
    initializeAuth(state: any, redirTo: string) {
      state.authenticated = true;
      if (redirTo) {
        router.push(redirTo);
      } else {
        router.push({ name: 'home' });
      }
    },
    logout(state: any) {
      state.authenticated = false;
      router.push({ name: 'home' });
    },
  },
  getters: {
    authenticated(state: any) {
      // if (process.env.NODE_ENV === 'development') {
      // Vue.$log.debug(`Skipping routeguards`);
      // return true;
      // }
      return state.authenticated;
    },
  },
};
