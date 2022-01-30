<template>
  <b> - {{ titleHeader }}</b>
  <Multiselect
    v-model="value"
    mode="tags"
    :searchable="true"
    :createTag="true"
    :options="optionsList"
  />
</template>
<script>
import Multiselect from '@vueform/multiselect'
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  components: { Multiselect },
  name: 'ItemsExperienceForm',
  props: {
    title: String,
    titleHeader: String,
    optionsList: Object,
    valuesDefault: Object,
  },
  setup(props) {
    let key = 1
    const store = useStore()
    let newValues = []
    const value = computed({
      get: () => {
        return props.valuesDefault
      },
      set: (vals) => {
        let optionsListToSendUpdated = props.optionsList
          .filter(filterForUpdate)
          .map(function (element) {
            return { id: element.id, name: element.value }
          })
        let optionsListToSendNew = vals
          .filter(filterForNew)
          .map(function (element) {
            return { id: 0, name: element }
          })
        //Se los nuevos a los que existen
        optionsListToSendNew.forEach(function (element) {
          optionsListToSendUpdated.push(element)
        })
        store.dispatch('refreshListItemsValue', optionsListToSendUpdated)
        function filterForUpdate(e) {
          return vals.filter((item) => item === e.value).length > 0
        }
        function filterForNew(e) {
          return (
            props.optionsList.filter((item) => item.value === e).length === 0
          )
        }
      },
    })
    return {
      key,
      value,
      newValues,
    }
  },
}
</script>
<style></style>
