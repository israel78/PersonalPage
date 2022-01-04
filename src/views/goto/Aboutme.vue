<template>
  <CRow class="row row-cols-1">
    <CCol>
      <!-- una caja por experiencia-->
      <CCard>
        <CCardHeader>
          <h4 style="float: left">
            <CIcon :icon="icon.cilContact" /> Sobre mí
          </h4>
        </CCardHeader>
        <CCardBody>
          <CListGroup flush>
            <CListGroupItem>
              <CRow>
                <CCol md="3">
                  <b>Conocimiento:</b>
                </CCol>
                <CCol md="9">
                  <p>Programador</p>
                </CCol>
              </CRow>
            </CListGroupItem>
            <CListGroupItem>
              <CRow>
                <CCol md="3">
                  <b>Inquietudes profesionales</b>
                </CCol>
                <CCol md="9">
                  <p>css - HTML</p>
                </CCol>
              </CRow>
            </CListGroupItem>
            <CListGroupItem>
              <CRow>
                <CCol md="3">
                  <b>Preferencias a nivel profesional:</b>
                </CCol>
                <CCol md="9">
                  <p>Eclipse - Intellij</p>
                </CCol>
              </CRow>
            </CListGroupItem>
          </CListGroup>
        </CCardBody>
      </CCard>
    </CCol>
    <!--fin-->
  </CRow>
  <!--Inicion formación oficial-------------------------------->
  <CCard>
    <CCardHeader>
      <h4 style="float: left"><CIcon :icon="icon.cilBrowser" /> Formación</h4>
    </CCardHeader>
  </CCard>
  <CRow
    :class="{
      'row row-cols-1': window.outerWidth < 600,
      'row row-cols-2': window.outerWidth > 600,
    }"
  >
    <CCol>
      <!-- una caja por experiencia-->
      <CCard>
        <CCardHeader>
          <h5 style="float: left">
            <CIcon :icon="icon.cilBadge" /> Formacion 1
          </h5>
          <p style="float: right">
            <CIcon :icon="icon.cilTerminal" /> fecha inicio - fecha fin
          </p>
        </CCardHeader>
        <CCardBody>
          <CListGroup flush>
            <CListGroupItem>
              <CRow>
                <CCol md="3">
                  <b>Datos de interés:</b>
                </CCol>
                <CCol md="9">
                  <p>Programador</p>
                </CCol>
              </CRow>
            </CListGroupItem>
            <CListGroupItem>
              <CRow>
                <CCol md="3">
                  <b>Inquietudes profesionales</b>
                </CCol>
                <CCol md="9">
                  <p>css - HTML</p>
                </CCol>
              </CRow>
            </CListGroupItem>
            <CListGroupItem>
              <CRow>
                <CCol md="3">
                  <b>Modo de trabajo:</b>
                </CCol>
                <CCol md="9">
                  <p>Eclipse - Intellij</p>
                </CCol>
              </CRow>
            </CListGroupItem>
          </CListGroup>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol>
      <!-- una caja por experiencia-->
      <CCard>
        <CCardHeader>
          <h5 style="float: left">
            <CIcon :icon="icon.cilBadge" /> Formación 2
          </h5>
          <p style="float: right">
            <CIcon :icon="icon.cilTerminal" /> fecha inicio - fecha fin
          </p>
        </CCardHeader>
        <CCardBody>
          <CListGroup flush>
            <CListGroupItem>
              <CRow>
                <CCol md="3">
                  <b>Datos de interés:</b>
                </CCol>
                <CCol md="9">
                  <p>Programador</p>
                </CCol>
              </CRow>
            </CListGroupItem>
            <CListGroupItem>
              <CRow>
                <CCol md="3">
                  <b>Inquietudes profesionales</b>
                </CCol>
                <CCol md="9">
                  <p>css - HTML</p>
                </CCol>
              </CRow>
            </CListGroupItem>
            <CListGroupItem>
              <CRow>
                <CCol md="3">
                  <b>Modo de trabajo:</b>
                </CCol>
                <CCol md="9">
                  <p>Eclipse - Intellij</p>
                </CCol>
              </CRow>
            </CListGroupItem>
          </CListGroup>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
  <!-- fin Inicion formación oficial-------------------------------->
  <!--fin-->
  <!-- Inicio Inicion formación Cursos-------------------------------->
  <CCard>
    <CCardHeader>
      <h4 style="float: left"><CIcon :icon="icon.cilBrowser" /> Cursos</h4>
    </CCardHeader>
  </CCard>
  <CRow class="row row-cols-1">
    <CCol>
      <!-- una caja por experiencia-->
      <CCard>
        <CCardBody>
          <CListGroup flush>
            <CListGroupItem>
              <CRow>
                <CCol md="3">
                  <b>Curso 1:</b>
                </CCol>
                <CCol md="9">
                  <p>Programador</p>
                </CCol>
              </CRow>
            </CListGroupItem>
            <CListGroupItem>
              <CRow>
                <CCol md="3">
                  <b>Curso 2:</b>
                </CCol>
                <CCol md="9">
                  <p>css - HTML</p>
                </CCol>
              </CRow>
            </CListGroupItem>
            <CListGroupItem>
              <CRow>
                <CCol md="3">
                  <b>Curso 3:</b>
                </CCol>
                <CCol md="9">
                  <p>Eclipse - Intellij</p>
                </CCol>
              </CRow>
            </CListGroupItem>
          </CListGroup>
        </CCardBody>
      </CCard>
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
