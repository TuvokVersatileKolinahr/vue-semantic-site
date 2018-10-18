import Vue from 'vue';
import { mapState, mapMutations } from 'vuex';
import VueLogger from 'vuejs-logger';

import router from './router';
import store from '@/store/store';

import JQuery from 'jquery';

import '@/assets/semantic/semantic.min.css';
import '@/assets/semantic/semantic.min.js';

import App from './App.vue';

const isProduction = process.env.NODE_ENV === 'production';

const options = {
  isEnabled: true,
  logLevel: isProduction ? 'error' : 'debug',
  stringifyArguments: false,
  showLogLevel: true,
  showMethodName: true,
  separator: '|',
  showConsoleColors: true,
};

Vue.use(VueLogger, options);

// Disable the standard ProductionTip warning
Vue.config.productionTip = false;
const app = new Vue({
  router,
  store,
  computed: {
    ...mapState('app', ['ready']),
  },
  methods: {
    ...mapMutations('app', {
      toggleState: 'toggleState',
    }),
    init() {
      Vue.$log.debug('Device state is ready.');
      this.toggleState();
    },
  },
  render: (h) => h(App),
}).$mount('#app');

$(document).ready(() => {
  Vue.$log.debug('Device ready function calling app.init()');
  app.init();
});
