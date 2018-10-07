import Vue from 'vue';
import route from '@/router';

export default {
  namespaced: true,
  state: {
    authenticated: false,
  },
  mutations: {
    initializeAuth(state: any) {
      state.authenticated = true;
      route.push({ name: 'home' });
    },
    logout(state: any) {
      state.authenticated = false;
      route.push({ name: 'home' });
    },
  },
  getters: {
    authenticated(state: any) {
      if (process.env.NODE_ENV === 'development') {
        Vue.$log.debug(`Skipping routeguards`);
        return true;
      }
      return state.authenticated;
    },
  },
};
