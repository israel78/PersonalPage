import { createStore } from 'vuex'
import * as login from '@/store/modules/login.js'
import * as home from '@/store/modules/home.js'

export default createStore({
  state: {
    sidebarVisible: '',
    sidebarUnfoldable: false,
    visibleModal: false,
    modalTitle: '',
  },
  mutations: {
    toggleSidebar(state) {
      state.sidebarVisible = !state.sidebarVisible
    },
    toggleUnfoldable(state) {
      state.sidebarUnfoldable = !state.sidebarUnfoldable
    },
    updateSidebarVisible(state, payload) {
      state.sidebarVisible = payload.value
    },
    setVisibleModal(state, vm) {
      state.visibleModal = vm
    },
    setModalTitle(state, mt) {
      state.modalTitle = mt
    },
  },
  actions: {
    updateVisibleModal({ commit }, visible) {
      commit('setVisibleModal', visible)
    },
    updateModalTitle({ commit }, title) {
      commit('setModalTitle', title)
    },
  },
  modules: {
    firstModule: login,
    secondModule: home,
  },
  getters: {
    getVisibleModal(state) {
      return state.visibleModal
    },
    getModalTitle(state) {
      return state.modalTitle
    },
  },
})
