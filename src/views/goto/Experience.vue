<template>
  <Toast :title="title" :body="body" :bodyOk="bodyOk" />
  <CRow fluid v-if="admin != null">
    <EditItemsForExpericence />
  </CRow>
  <CRow
    v-if="admin == null"
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
  <CRow
    v-if="admin != null"
    :class="{
      'row row-cols-1': window.outerWidth < 600,
      'row row-cols-2': window.outerWidth > 600,
    }"
  >
    <CCol v-for="item in expValuesComputed" :key="item.id">
      <!-- una caja por experiencia-->
      <ExperienceBoxEdit :experience="item" />
    </CCol>
  </CRow>
</template>
<script>
import Toast from '@/components/Toast'
import * as icon from '@coreui/icons'
import VueImg from '@/assets/images/vue.jpg'
import ExperienceBox from '@/components/ExperienceBox'
import { computed, onBeforeMount } from 'vue'
import { useStore } from 'vuex'
import EditItemsForExpericence from '@/components/EditItemsForExpericence'
import ExperienceBoxEdit from '@/components/ExperienceBoxEdit'
export default {
  name: 'Experience',
  components: {
    EditItemsForExpericence,
    ExperienceBox,
    Toast,
    ExperienceBoxEdit,
  },
  setup() {
    const store = useStore()
    let expData = []
    const title = 'Aviso'
    const body = computed(() => store.getters.getErrorMsg)
    const bodyOk = computed(() => store.getters.getAciertoMsg)
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
      body,
      bodyOk,
      title,
    }
  },
}
</script>
