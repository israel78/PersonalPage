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
      <CForm
        id="graphicForm"
        :validated="true"
        @submit.prevent="this.processGraphicModalForm(pData)"
      >
        <CInputGroup class="mb-3">
          <CInputGroupText id="basic-addon1">Titulo</CInputGroupText>
          <CFormInput
            placeholder=""
            aria-label=""
            aria-describedby="basic-addon1"
            v-model="pData.title"
            required
          />
          <CFormFeedback invalid>
            El título no puede estar vacío
          </CFormFeedback>
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
            required
          />
          <CFormFeedback invalid> El valor es requerido </CFormFeedback>
        </CInputGroup>
        <CInputGroup class="mb-3">
          <CInputGroupText id="basic-addon1">Nombre línea 2</CInputGroupText>
          <CFormInput
            placeholder=""
            aria-label=""
            aria-describedby="basic-addon1"
            v-model="pData.lineGraphicNameTwo"
            required
          />
          <CFormFeedback invalid> El valor es requerido </CFormFeedback>
        </CInputGroup>
        <CInputGroup class="mb-3">
          <CInputGroupText id="basic-addon1">Nombre línea 3</CInputGroupText>
          <CFormInput
            placeholder=""
            aria-label=""
            aria-describedby="basic-addon1"
            v-model="pData.lineGraphicNameTree"
            required
          />
          <CFormFeedback invalid> El valor es requerido </CFormFeedback>
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
              <CInputGroupText id="basic-addon1"> Valor x</CInputGroupText>
              <CFormInput
                type="text"
                placeholder=""
                aria-label=""
                v-model="item.xvalue"
                required
              />
              <CFormFeedback invalid> El valor es requerido </CFormFeedback>
            </CInputGroup>
            <CInputGroup class="mb-3">
              <CFormInput
                type="number"
                placeholder=""
                aria-label=""
                v-model="item.yvalue1"
                number
                required
              />
              <CInputGroupText>/</CInputGroupText>
              <CFormInput
                type="number"
                placeholder=""
                aria-label=""
                v-model="item.yvalue2"
                number
                required
              />
              <CInputGroupText>/</CInputGroupText>
              <CFormInput
                type="number"
                placeholder=""
                aria-label=""
                v-model="item.yvalue3"
                number
                required
              />
              <CButton
                color="secondary"
                @click="updateGraphicValuesList(item.xvalue, item.id)"
                >Borrar</CButton
              >
              <CFormFeedback invalid> valor numérico </CFormFeedback>
            </CInputGroup>
          </CRow>
          <CButton color="primary " type="submit">Guardar cambios</CButton>
        </CCol>
      </CForm>
    </CModalBody>
    <CModalFooter>
      <CButton color="secondary" @click="this.updateVisibleModal(false)"
        >Close</CButton
      >
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
      processGraphicModalForm: 'processGraphicModalForm',
      updateGraphicValuesList: function (value, value2, id) {
        this.pData.graphicValuesList = this.pData.graphicValuesList.filter(
          (item) => value2 != item.xvalue && id !== item.id,
        )
      },
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
