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
      @click="toggleVisibleValue"
      style="margin-left: 1%; margin-bottom: 0.5%"
      >habilidades</CButton
    >
    <CButton
      @click="toggleVisibleValue"
      style="margin-left: 1%; margin-bottom: 0.5%"
      color="dark"
      >herramientas de desarrollo</CButton
    >
    <CButton
      @click="toggleVisibleValue"
      style="margin-left: 1%; margin-bottom: 0.5%"
      color="dark"
      >funciones</CButton
    >
    <CCollapse :visible="visible">
      <CCard class="mt-3">
        <CCardBody>
          Anim pariatur cliche reprehenderit, enim eiusmod high life accuses
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </CCardBody>
      </CCard>
    </CCollapse>
  </CContainer>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'EditItemsForExpericence',
  setup() {
    const visible = ref(false)
    const toggleVisibleValue = () => {
      visible.value = !visible.value
      console.log(visible.value)
    }
    return {
      toggleVisibleValue,
      visible,
    }
  },
}
</script>

<style scoped></style>
