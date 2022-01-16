<template>
  <CCard>
    <CCardImage orientation="top" :src="vueImg" />
    <CCardHeader>
      <h4 style="float: left">
        <CIcon :icon="icon.cilTerminal" /> Experiecncia 1
      </h4>
      <p style="float: right">
        <CIcon :icon="icon.cilTerminal" /> fecha inicio - fecha fin
      </p>
    </CCardHeader>
    <CCardBody>
      <CListGroup flush>
        <CListGroupItem>
          <CRow>
            <CCol md="3">
              <b>Función/es:</b>
            </CCol>
            <CCol md="9">
              <p>Programador</p>
            </CCol>
          </CRow>
        </CListGroupItem>
        <CListGroupItem>
          <CRow>
            <CCol md="3">
              <b>Tecnologías:</b>
            </CCol>
            <CCol md="9">
              <p>css - HTML</p>
            </CCol>
          </CRow>
        </CListGroupItem>
        <CListGroupItem>
          <CRow>
            <CCol md="3">
              <b>Entornos de desarrollo:</b>
            </CCol>
            <CCol md="9">
              <p>Eclipse - Intellij</p>
            </CCol>
          </CRow>
        </CListGroupItem>
      </CListGroup>
    </CCardBody>
  </CCard>
</template>
<script>
import * as icon from '@coreui/icons'
import vueImg from '@/assets/images/vue.jpg'
export default {
  props: {
    principalData: Object,
  },
  setup() {
    return {
      icon,
      vueImg,
    }
  },
}
</script>
