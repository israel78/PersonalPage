import axios from 'axios'
axios.defaults.withCredentials = true
axios.defaults.headers = {
  Authorization: '123456',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
}
axios.defaults.baseURL = 'https://captchaback.herokuapp.com/api/home/app'
axios.defaults.baseURL = 'http://localhost:8084'
export const state = {
  experiences: [],
}
export const mutations = {
  setExperiences(state, experiences) {
    state.experiences = experiences
  },
}
export const actions = {
  getExperiencesData({ commit }) {
    axios
      .get('/api/experience/app/getexperiencesofuser?userid=1')
      .then((response) => {
        commit('setExperiences', response.data)
      })
      .catch((error) => console.log(error))
    console.log('experiences')
  },
}
export const getters = {
  getExperiences: (state) => {
    return state.experiences
  },
}
