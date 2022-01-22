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
      @click="toggleVisibleValue('skills')"
      style="margin-left: 1%; margin-bottom: 0.5%"
      >habilidades</CButton
    >
    <CButton
      @click="toggleVisibleValue('tools')"
      style="margin-left: 1%; margin-bottom: 0.5%"
      color="dark"
      >herramientas de desarrollo</CButton
    >
    <CButton
      @click="toggleVisibleValue('functions')"
      style="margin-left: 1%; margin-bottom: 0.5%"
      color="dark"
      >funciones</CButton
    >
    <CCollapse :visible="visible">
      <ItemsExperienceForm :title="title"></ItemsExperienceForm>
    </CCollapse>
  </CContainer>
</template>

<script>
import { ref } from 'vue'
import ItemsExperienceForm from '@/components/ItemsExperienceForm'
export default {
  name: 'EditItemsForExpericence',
  components: { ItemsExperienceForm },
  setup() {
    const visible = ref(false)
    const title = ref('')
    const toggleVisibleValue = (value) => {
      visible.value = !visible.value
      title.value = value
      console.log(visible.value)
    }
    return {
      toggleVisibleValue,
      visible,
      title,
    }
  },
}
</script>

<style scoped></style>
