<template>
  <CContainer
    style="
      background-color: lightgray;
      padding-bottom: 0.5%;
      margin-bottom: 0.5%;
    "
  >
    <CCol>
      <h5>Editar</h5>
    </CCol>
    <CButton
      color="dark"
      @click="toggleVisibleValue('skillsItems')"
      style="margin-left: 1%; margin-bottom: 0.5%"
      >habilidades</CButton
    >
    <CButton
      @click="toggleVisibleValue('devToolsItems')"
      style="margin-left: 1%; margin-bottom: 0.5%"
      color="dark"
      >herramientas de desarrollo</CButton
    >
    <CButton
      @click="toggleVisibleValue('functionsItems')"
      style="margin-left: 1%; margin-bottom: 0.5%"
      color="dark"
      >funciones</CButton
    >
    <CCollapse :visible="visible">
      <ItemsExperienceForm
        :title="title"
        :optionsList="skillOptions"
        :valuesDefault="valuesDefault"
      ></ItemsExperienceForm>
    </CCollapse>
  </CContainer>
</template>

<script>
import { ref, computed } from 'vue'
import ItemsExperienceForm from '@/components/ItemsExperienceForm'
import { useStore } from 'vuex'
export default {
  name: 'EditItemsForExpericence',
  components: { ItemsExperienceForm },
  setup() {
    const store = useStore()
    const valuesDefault = computed({
      get() {
        if (store.getters.getExperienceItems != null) {
          console.log(
            store.getters.getExperienceItems.map((item) => {
              return item.name
            }),
          )
          return store.getters.getExperienceItems.map((item) => {
            return item.name
          })
        }
        return null
      },
    })
    const skillOptions = computed({
      get() {
        if (store.getters.getExperienceItems != null)
          return store.getters.getExperienceItems.map((item) => {
            return { id: item.id, value: item.name, label: item.name }
          })
        return null
      },
    })
    let modelOptions = []
    const visible = ref(false)
    const title = ref('')
    const toggleVisibleValue = (value) => {
      visible.value = !visible.value
      title.value = value
      store.dispatch('getExperienceItemsCall', value)
      console.log(visible.value)
    }
    return {
      toggleVisibleValue,
      visible,
      title,
      skillOptions,
      modelOptions,
      valuesDefault,
    }
  },
}
</script>

<style scoped></style>
