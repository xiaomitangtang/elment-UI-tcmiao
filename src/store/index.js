import Vue from "vue";
import Vuex from "vuex";

import demo from "./modules/demo";
import socketDemo from "./modules/socket_io_demo";
Vue.use(Vuex);

export const mutations = {};

export const actions = {};

export const getters = {};

export function createStore() {
  return new Vuex.Store({
    modules: {
      demo,
      socketDemo
    },
    state: {},
    actions,
    mutations,
    getters
  });
}
