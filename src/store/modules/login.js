import axios from 'axios'
import router from '@/router'
axios.defaults.withCredentials = true
axios.defaults.headers = {
  Authorization: '123456',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
}
//axios.defaults.baseURL = 'https://captchaback.herokuapp.com/api/captcha'
axios.defaults.baseURL = 'http://localhost:8084'
export const state = {
  username: '',
  password: '',
  captcha: '',
  captchaInput: '',
  captchaSettings: {
    numCharact: 0,
    attemps: 0,
    alfa: false,
    id: 0,
  },
  maxAttemps: '',
  attemps: 0,
  acierto: false,
  error: '',
  intentosMax: 0,
  intentos: 0,
  aciertoMsg: '',
}
export const mutations = {
  setSettings(state, captchaSettings) {
    state.captchaSettings = captchaSettings
  },
  setCaptcha(state, captcha) {
    localStorage.setItem('captcha', captcha)
    state.captcha = captcha
  },
  setMaxAttemps(state, attemps) {
    localStorage.setItem('attemps', attemps)
    state.maxAttemps = attemps
  },
  setIntentosMax(state, intentosMax) {
    state.intentosMax = intentosMax
  },
  setIntentos(state, intentos) {
    state.intentos = intentos
  },
  setError(state, error) {
    state.error = error
  },
  setAciertoMsg(state, aciertoMsg) {
    state.aciertoMsg = aciertoMsg
  },
}
export const actions = {
  getCaptcha({ commit }) {
    if (localStorage.getItem('captcha') == null) {
      axios
        .get('/api/captcha/app/getcaptcha')
        .then((response) => {
          commit('setCaptcha', response.data.key)
          commit('setMaxAttemps', response.data.value)
        })
        .catch((error) => console.log(error))
    } else {
      commit('setCaptcha', localStorage.getItem('captcha'))
    }
  },
  // eslint-disable-next-line no-unused-vars
  setSettings({ commit }, settings) {
    axios
      .post('/api/captcha/config/setsettings', {
        id: settings.id,
        alfa: settings.alfa,
        attemps: settings.attemps,
        numCharact: settings.numCharact,
      })
      // eslint-disable-next-line no-unused-vars
      .then((response) => router.push({ name: 'admin' }))
      .catch((error) => console.log(error))
  },
  procesarFormulario({ commit }, user) {
    console.log('entro')
    if (user.captchaInput == localStorage.getItem('captcha')) {
      axios
        .post('/api/captcha/app/loginwithoutsession', {
          firstName: user.name,
          passw: user.passWord,
        })
        // eslint-disable-next-line no-unused-vars
        .then((response) => {
          localStorage.removeItem('captcha')
          localStorage.removeItem('attemps')
          commit('setAciertoMsg', 'Enhorabuena has conseguido logarte')
          commit('setError', '')
          localStorage.setItem('admin', true)
          // commit('setAcierto', true)
          router.push({ path: '/' })
        })
        .catch((error) => {
          if (error.response) {
            commit('setError', error.response.data.value)
            commit('setIntentosMax', localStorage.getItem('attemps'))
            commit('setIntentos', error.response.data.key)
          }
        })
    } else {
      commit('setError', 'Captcha no correcto')
      commit('setIntentosMax', localStorage.getItem('attemps'))
      commit('setIntentos', state.intentos + 1)
    }
  },
}
export const getters = {
  getErrors: (state) => {
    return state.error
  },
  getCaptcha: (state) => {
    return state.captcha
  },
}
