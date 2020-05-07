import Vuex from "vuex";

export default Vuex.createStore({
  state: {
    testStatus:0
  },
  mutations: {
    set_testStatus(state,data){
      state.testStatus = data
    }
  },
  actions: {},
  modules: {}
});
