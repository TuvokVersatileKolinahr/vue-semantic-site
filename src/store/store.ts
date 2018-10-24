import Vue from 'vue';
import Vuex from 'vuex';

import loginModule from '@/store/login-module';
import appModule from '@/store/app-module';
import profileModule from '@/store/profile-module';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    app: appModule,
    login: loginModule,
    profile: profileModule,
  },
});
