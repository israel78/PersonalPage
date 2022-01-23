<template>
  <CCard class="mt-3">
    <CCardBody>
      <b>{{ title }}</b> - (Las opciones desmarcadas están asignadas)
      <Multiselect
        v-model="value"
        mode="tags"
        :searchable="true"
        :createTag="true"
        :options="optionsList"
      />
    </CCardBody>
  </CCard>
</template>
<script>
import Multiselect from '@vueform/multiselect'
import { computed } from 'vue'
export default {
  components: { Multiselect },
  name: 'ItemsExperienceForm',
  props: {
    title: String,
    optionsList: Object,
    valuesDefault: Object,
  },
  setup(props, emit) {
    const value = computed({
      get: () => props.valuesDefault,
      set: (value) => {
        console.log(props.valuesDefault)
        console.log(value)
        emit('update:valuesDefault', value)
      },
    })

    return {
      value,
    }
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
