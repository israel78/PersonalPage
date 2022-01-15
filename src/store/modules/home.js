import axios from 'axios'
import router from '@/router'
axios.defaults.withCredentials = true
axios.defaults.headers = {
  Authorization: '123456',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
}
axios.defaults.baseURL = 'https://captchaback.herokuapp.com/api/home/app'
axios.defaults.baseURL = 'http://localhost:8084'
export const state = {
  phrase: '',
  aciertoMsg: '',
  errorMsg: '',
  graphicPrincipalData: '',
  graphicValuesList: [],
  graphicValue: {
    id: '',
    yvalue1: '',
    xvalue: '',
    yvalue3: '',
    yvalue2: '',
  },
}
export const mutations = {
  setPhrase(state, phrase) {
    state.phrase = phrase
  },
  setAciertoMsg(state, aciertoMsg) {
    state.aciertoMsg = aciertoMsg
  },
  setErrorMsg(state, error) {
    state.errorMsg = error
  },
  setGraphicValue(state, graphicValue) {
    state.graphicValue = graphicValue
    state.graphicValuesList.push(state.graphicValue)
  },
  setGraphicValueToZero(state, graphicValue) {
    state.graphicValuesList = graphicValue
  },
  setGraphicPrincipadData(state, graphicPrincipalData) {
    state.graphicPrincipalData = graphicPrincipalData
  },
  setGraphicValueList(state, graphicValueList) {
    state.graphicValueList = graphicValueList
  },
}
export const actions = {
  getGraphicDataAndPhrase({ commit }) {
    commit('setGraphicValueToZero', []),
      axios
        .get('/api/home/app/getgraphicdataandphrase?userid=1')
        .then((response) => {
          commit('setPhrase', response.data.importantPhrase)
          commit('setGraphicPrincipadData', response.data.graphic)
          response.data.graphic.graphicValuesList.forEach((element) =>
            commit('setGraphicValue', element),
          )
        })
        .catch((error) => console.log(error))
  },
  async processPhraseForm({ commit }, phrase) {
    console.log('entro')
    commit('setGraphicValueList', [])
    await axios
      .post('/api/home/app/setmportantphrase', {
        id: 1,
        importantPhrase: phrase,
      })
      // eslint-disable-next-line no-unused-vars
      .then((response) => {
        commit('setAciertoMsg', response.data.value)
        commit('setErrorMsg', '')
        commit('setPhrase', phrase)
      })
      .catch((error) => {
        if (error.response) {
          commit('setAciertoMsg', '')
          commit('setErrorMsg', error.response.data.value)
        } else {
          commit('setAciertoMsg', '')
          commit('setErrorMsg', 'Error de comunicación con el servidor')
        }
      })
  },
  async processGraphicModalForm({ commit }, graphicData) {
    console.log('entro :' + graphicData)
    commit('setGraphicValueList', [])
    commit('setAciertoMsg', '')
    commit('setErrorMsg', '')
    await axios
      .post('/api/home/app/setgraphicdata?userid=1', graphicData)
      // eslint-disable-next-line no-unused-vars
      .then((response) => {
        commit('setGraphicPrincipadData', graphicData)
        commit('setGraphicValueList', [])
        commit('setVisibleModal', false)
        commit('setErrorMsg', '')
        commit('setAciertoMsg', response.data.value)
      })
      .catch((error) => {
        if (error.response) {
          commit('setAciertoMsg', '')
          commit('setErrorMsg', error.response.data.value)
        } else {
          commit('setAciertoMsg', '')
          commit('setErrorMsg', 'Error de comunicación con el servidor')
        }
      })
    setTimeout(router.go(), 3000)
  },
  setAciertoMsgToEmpty({ commit }) {
    commit('setAciertoMsg', '')
  },
  setErrorMsgToEmpty({ commit }) {
    commit('setErrorMsg', '')
  },
}
export const getters = {
  getPhrase: (state) => {
    return state.phrase
  },
  getGraphicValueList: (state) => {
    return state.graphicValuesList
  },
  getGraphicPrincipalData: (state) => {
    return state.graphicPrincipalData
  },
  getErrorMsg: (state) => {
    return state.errorMsg
  },
  getAciertoMsg: (state) => {
    return state.aciertoMsg
  },
}
