import { createStore } from 'vuex'
import * as login from '@/store/modules/login.js'
import * as home from '@/store/modules/home.js'
import * as experience from '@/store/modules/experience.js'
export default createStore({
  state: {
    aciertoMsg: '',
    errorMsg: '',
    sidebarVisible: '',
    sidebarUnfoldable: false,
    visibleModal: false,
    modalTitle: '',
  },
  mutations: {
    setAciertoMsg(state, aciertoMsg) {
      state.aciertoMsg = aciertoMsg
    },
    setErrorMsg(state, error) {
      state.errorMsg = error
    },
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
    thirdModule: experience,
  },
  getters: {
    getVisibleModal(state) {
      return state.visibleModal
    },
    getModalTitle(state) {
      return state.modalTitle
    },
    getErrorMsg: (state) => {
      return state.errorMsg
    },
    getAciertoMsg: (state) => {
      return state.aciertoMsg
    },
  },
})
