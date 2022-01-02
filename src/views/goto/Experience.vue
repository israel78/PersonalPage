<template>
  <CRow
    :class="{
      'row row-cols-1': window.outerWidth < 600,
      'row row-cols-2': window.outerWidth > 600,
    }"
  >
    <CCol>
      <!-- una caja por experiencia-->
      <CCard>
        <CCardImage orientation="top" :src="VueImg" />
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
            <CListGroupItem><b>Funcion/es:</b> programador</CListGroupItem>
            <CListGroupItem><b>Tecnologías:</b> </CListGroupItem>
            <CListGroupItem><b>Entornos de desarrollo:</b></CListGroupItem>
          </CListGroup>
        </CCardBody>
      </CCard>
    </CCol>
    <!--fin-->
    <!-- una caja por experiencia-->
    <CCol>
      <CCard>
        <CCardImage orientation="top" :src="VueImg" />
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
            <CListGroupItem><b>Funcion/es:</b> programador</CListGroupItem>
            <CListGroupItem><b>Tecnologías:</b> </CListGroupItem>
            <CListGroupItem><b>Entornos de desarrollo:</b></CListGroupItem>
          </CListGroup>
        </CCardBody>
      </CCard>
      <!--fin-->
    </CCol>
  </CRow>
</template>

<script>
import * as icon from '@coreui/icons'
import VueImg from '@/assets/images/vue.jpg'
export default {
  name: 'Experience',
  setup() {
    return {
      icon,
      VueImg,
    }
  },
}
</script>
