<template>
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
export default {
  name: 'Experience',
  components: { ExperienceBox },
  setup() {
    const store = useStore()
    let expData = []
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
    }
  },
}
</script>
