import Vue from "vue";
import Vuex from "vuex";

import demo from "./modules/demo";
import socketDemo from "./modules/socket_io_demo";
import formDesigner from "./modules/formDesigner";
Vue.use(Vuex);

export const mutations = {
  setRouterList(state, data) {
    state.routerList = data;
  }
};
export const actions = {};
export const getters = {};
export const state = {
  routerList: []
};

export function createStore() {
  return new Vuex.Store({
    modules: {
      demo,
      socketDemo,
      formDesigner
    },
    state,
    actions,
    mutations,
    getters
  });
}
