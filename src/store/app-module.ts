export default {
  namespaced: true,
  state: {
    ready: false,
  },
  mutations: {
    toggleState: (state: any) => {
      state.ready = !state.ready;
    },
  },
  actions: {
    //
  },
  getters: {
    //
  },
};
