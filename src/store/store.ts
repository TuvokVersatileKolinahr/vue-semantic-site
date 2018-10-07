import Vue from 'vue';
import Vuex from 'vuex';

import loginModule from '@/store/login-module';
import appModule from '@/store/app-module';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    app: appModule,
    login: loginModule,
  },
});
