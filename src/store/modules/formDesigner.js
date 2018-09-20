// import {apistore} from '@/config/api/api.store'
export default {
  namespaced: true,
  state: {
    edit: false,
    allSettting: true,
    layout: 2,
    openLayout: false,
    activeFormDragSrc: null
  },
  mutations: {
    setEdit(state, edit) {
      state.edit = edit;
    },
    setAllSettting(state, flag) {
      state.allSettting = flag;
    },
    setLayout(state, val) {
      state.layout = val;
    },
    setOpenLayout(state, val) {
      state.openLayout = val;
    },
    setActiveFormDragSrc(state, val) {
      state.activeFormDragSrc = val;
    }
  },
  actions: {}
};
