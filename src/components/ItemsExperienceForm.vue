<template>
  <CCard class="mt-3">
    <CCardBody>
      <b>{{ title }}</b> - (Las opciones desmarcadas están asignadas)
      <Multiselect v-model="value" mode="tags" :options="options"></Multiselect>
    </CCardBody>
  </CCard>
</template>
<script>
import Multiselect from '@vueform/multiselect'
export default {
  components: { Multiselect },
  name: 'ItemsExperienceForm',
  props: {
    title: String,
  },
  setup() {
    const value = []
    const options = [
      { value: 'batman', label: 'Batman' },
      { value: 'robin', label: 'Robin', disabled: true },
      { value: 'joker', label: 'Joker' },
    ]
    return { options, value }
  },
}
</script>
<style src="@vueform/multiselect/themes/default.css"></style>
<style>
.multiselect-tag {
  background-color: gray !important;
  font-weight: normal !important;
}
</style>
