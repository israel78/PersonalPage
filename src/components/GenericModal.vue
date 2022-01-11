<template>
  <CModal
    scrollable
    :visible="visibleModal"
    @close="this.updateVisibleModal(false)"
  >
    <CModalHeader>
      <CRow>
        <CCol>
          <CModalTitle>{{ modalTitle }}</CModalTitle>
        </CCol>
      </CRow>
    </CModalHeader>
    <CModalBody>
      <CInputGroup class="mb-3">
        <CInputGroupText id="basic-addon1">Titulo</CInputGroupText>
        <CFormInput
          placeholder=""
          aria-label=""
          aria-describedby="basic-addon1"
          v-model="pData.title"
        />
      </CInputGroup>
      <CInputGroup class="mb-3">
        <CInputGroupText id="basic-addon1">Sub-titulo</CInputGroupText>
        <CFormInput
          placeholder=""
          aria-label=""
          aria-describedby="basic-addon1"
          v-model="pData.subTitle"
        />
      </CInputGroup>
      <CInputGroup class="mb-3">
        <CInputGroupText id="basic-addon1">Nombre línea 1</CInputGroupText>
        <CFormInput
          placeholder=""
          aria-label=""
          aria-describedby="basic-addon1"
          v-model="pData.lineGraphicNameOne"
        />
      </CInputGroup>
      <CInputGroup class="mb-3">
        <CInputGroupText id="basic-addon1">Nombre línea 2</CInputGroupText>
        <CFormInput
          placeholder=""
          aria-label=""
          aria-describedby="basic-addon1"
          v-model="pData.lineGraphicNameTwo"
        />
      </CInputGroup>
      <CInputGroup class="mb-3">
        <CInputGroupText id="basic-addon1">Nombre línea 3</CInputGroupText>
        <CFormInput
          placeholder=""
          aria-label=""
          aria-describedby="basic-addon1"
          v-model="pData.lineGraphicNameTree"
        />
      </CInputGroup>
      <CRow>
        <CCol>
          <CFormLabel for="basic-url">Valores x / lineas 1,2 y 3</CFormLabel>
        </CCol>
        <CCol>
          <CLink @click="pushValue">Añadir valores gráfica</CLink>
        </CCol>
      </CRow>
      <CCol>
        <CRow v-for="item in pData.graphicValuesList" :key="item.id">
          <CInputGroup class="mb-3">
            <CFormInput placeholder="" aria-label="" v-model="item.xvalue" />
            <CInputGroupText>/</CInputGroupText>
            <CFormInput placeholder="" aria-label="" v-model="item.yvalue1" />
            <CInputGroupText>/</CInputGroupText>
            <CFormInput placeholder="" aria-label="" v-model="item.yvalue2" />
            <CInputGroupText>/</CInputGroupText>
            <CFormInput placeholder="" aria-label="" v-model="item.yvalue3" />
          </CInputGroup>
        </CRow>
      </CCol>
    </CModalBody>
    <CModalFooter>
      <CButton color="secondary" @click="this.updateVisibleModal(false)"
        >Close</CButton
      >
      <CButton color="primary">Save changes</CButton>
    </CModalFooter>
  </CModal>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  props: {
    principalData: Object,
  },
  data: function () {
    return {
      pData: {
        graphic: {
          id: 1,
          title: 'title',
          subTitle: 'subtitle',
          lineGraphicNameOne: 'linea 1',
          lineGraphicNameTwo: 'linea 3',
          lineGraphicNameTree: 'linea 2',
          graphicValuesList: [
            {
              id: 1,
              yvalue3: '20',
              yvalue2: '50',
              xvalue: '2019',
              yvalue1: '30',
            },
          ],
        },
      },
    }
  },
  created() {
    this.$store.dispatch('getGraphicDataAndPhrase')
  },
  methods: {
    ...mapActions({
      updateVisibleModal: 'updateVisibleModal',
    }),
    pushValue: function () {
      this.pData.graphicValuesList.push({
        xvalue: '',
        yvalue1: '',
        yvalue2: '',
        yvalue3: '',
      })
    },
  },
  computed: {
    visibleModal: function () {
      return this.$store.getters.getVisibleModal
    },
    modalTitle: function () {
      return this.$store.getters.getModalTitle
    },
    getGraphicPrincipalData: function () {
      return this.$store.getters.getGraphicPrincipalData != null
        ? this.$store.getters.getGraphicPrincipalData
        : this.pData
    },
  },
  watch: {
    getGraphicPrincipalData: function (value) {
      //Valor no reactivo, se hace una copia del mismo.
      this.pData = JSON.parse(JSON.stringify(value))
    },
  },
}
</script>
