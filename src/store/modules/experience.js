import axios from 'axios'
axios.defaults.withCredentials = true
axios.defaults.headers = {
  Authorization: '123456',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
}
//axios.defaults.baseURL = 'https://captchaback.herokuapp.com'
axios.defaults.baseURL = 'http://localhost:8084'
export const state = {
  experiences: [],
  experieceItems: [],
  experieceItemsSend: [],
}
export const mutations = {
  setExperiences(state, experiences) {
    state.experiences = experiences
  },
  setExperiencesItems(state, experienceItem) {
    experienceItem.forEach(function (experienceItem) {
      state.experieceItems.push(experienceItem)
    })
  },
  setExperienceItemsSend(state, experiencesItem) {
    state.experieceItemsSend.push(experiencesItem)
  },
  setExperienceItemsSendToZero(state, val) {
    state.experieceItemsSend = val
  },
  setExperienceItemsToZero(state, val) {
    state.experieceItems = val
  },
}
export const actions = {
  refreshListItemsValue({ commit }, values) {
    commit('setExperienceItemsSendToZero', [])
    console.log(values)
    values.forEach((item) => {
      const val = {
        id: item.id,
        name: item.name,
      }
      commit('setExperienceItemsSend', val)
    })
    console.log(state.experieceItemsSend)
  },
  setExperienceItemsToZeroAction: function ({ commit }) {
    commit('setExperienceItemsToZero', [])
  },
  setExperienceItemsSendToZeroAction({ commit }) {
    commit('setExperienceItemsSendToZero', [])
  },
  getExperiencesData({ commit }) {
    axios
      .get('/api/experience/app/getexperiencesofuser?userid=1')
      .then((response) => {
        commit('setExperiences', response.data)
      })
      .catch((error) => console.log(error))
    console.log('experiences')
  },
  getExperienceItemsCall({ commit }, type) {
    commit('setExperienceItemsToZero', [])
    axios
      .get('/api/experience/app/getexperienceitmes?type=' + type)
      .then((response) => {
        commit('setExperiencesItems', response.data)
        //return await response.data
      })
      .catch((error) => console.log(error))
    console.log('experiences')
  },
  processListItems({ commit }, type) {
    console.log('entro')
    console.log(state.experieceItemsSend)
    let cont2 = 0
    let cont = -1
    state.experieceItemsSend.forEach((item) => {
      if (item.id === 0) {
        state.experieceItemsSend[cont2].id = cont
        cont--
      }
      cont2++
    })
    const valuesToSend = state.experieceItemsSend.reduce(function (map, obj) {
      map[obj.id] = obj.name
      return map
    }, {})
    const data = {
      type: type,
      values: valuesToSend,
    }
    console.log('data:' + data.values)
    axios
      .post('/api/experience/app/setexperieneitems?userid=1', data)
      .then((response) => {
        commit('setAciertoMsg', response.data.value)
        commit('setErrorMsg', '')
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
}
export const getters = {
  getExperiences: (state) => {
    return state.experiences
  },
  getExperienceItems: (state) => {
    return state.experieceItems
  },
}
