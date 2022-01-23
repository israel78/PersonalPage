<template>
  <CRow fluid v-if="admin != null">
    <EditItemsForExpericence />
  </CRow>
  <CRow
    :class="{
      'row row-cols-1': window.outerWidth < 600,
      'row row-cols-2': window.outerWidth > 600,
    }"
  >
    <CCol v-for="item in expValuesComputed" :key="item.id">
      <!-- una caja por experiencia-->
      <ExperienceBox :experience="item" />
    </CCol>
  </CRow>
</template>
<script>
import * as icon from '@coreui/icons'
import VueImg from '@/assets/images/vue.jpg'
import ExperienceBox from '@/components/ExperienceBox'
import { computed, onBeforeMount } from 'vue'
import { useStore } from 'vuex'
import EditItemsForExpericence from '@/components/EditItemsForExpericence'
import axios from 'axios'
axios.defaults.withCredentials = true
axios.defaults.headers = {
  Authorization: '123456',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
}
axios.defaults.baseURL = 'https://captchaback.herokuapp.com/api/home/app'
axios.defaults.baseURL = 'http://localhost:8084'
export default {
  name: 'Experience',
  components: { EditItemsForExpericence, ExperienceBox },
  setup() {
    const store = useStore()
    let expData = []
    const admin = localStorage.getItem('admin')
    onBeforeMount(() => {
      if (
        store.getters.getExperiences == '' ||
        store.getters.getExperiences.length == 0
      )
        store.dispatch('getExperiencesData')
    })
    const expValuesComputed = computed({
      get() {
        return store.getters.getExperiences
      },
    })
    return {
      icon,
      VueImg,
      expData,
      expValuesComputed,
      admin,
    }
  },
}
</script>
