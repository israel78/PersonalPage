<template>
  <CCard>
    <CCardImage
      orientation="top"
      src="https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg"
    />
    <CCardHeader>
      <div class="mb-3">
        <CFormLabel for="exampleFormControlInput1">
          <h6>Imagen</h6>
        </CFormLabel>
        <CFormInput
          type="text"
          id="exampleFormControlInput1"
          :value="experienceFormComputed.urlImageExp"
        />
      </div>
      <div class="mb-3">
        <CFormLabel for="exampleFormControlInput1">
          <h6>Título</h6>
        </CFormLabel>
        <CFormInput
          type="text"
          id="exampleFormControlInput1"
          :value="experienceFormComputed.title"
        />
      </div>
      <!--<p style="float: right">
        <CIcon :icon="icon.cilTerminal" />
        {{ formatDate(experience.startDate) }}
        -
        {{ formatDate(experience.endDate) }}
      </p>-->
      <div class="mb-3">
        <CFormLabel for="exampleFormControlInput3">
          <h6>Desde</h6>
        </CFormLabel>
        <Datepicker
          v-model="dateFrom"
          monthPicker
          id="exampleFormControlInput1"
        />
      </div>
      <div class="mb-3">
        <CFormLabel for="exampleFormControlInput3">
          <h6>Hasta</h6>
        </CFormLabel>
        <Datepicker
          v-model="dateTo"
          monthPicker
          id="exampleFormControlInput3"
        />
      </div>
    </CCardHeader>
    <CCardBody>
      <CListGroup flush>
        <CListGroupItem>
          <CRow>
            <CCol md="3">
              <b>Descripción:</b>
            </CCol>
            {{ experience.description }}
          </CRow>
        </CListGroupItem>
        <CListGroupItem>
          <CRow>
            <CCol md="3">
              <b>Función/es:</b>
            </CCol>
            <TextBoxItemsList :textItems="functionsComputed" />
          </CRow>
        </CListGroupItem>
        <CListGroupItem>
          <CRow>
            <CCol md="3">
              <b>Tecnologías:</b>
            </CCol>
            <TextBoxItemsList :textItems="experienceComputed" />
          </CRow>
        </CListGroupItem>
        <CListGroupItem>
          <CRow>
            <CCol md="3">
              <b>Entornos de desarrollo:</b>
            </CCol>
            <TextBoxItemsList :textItems="devComputed" />
          </CRow>
        </CListGroupItem>
      </CListGroup>
    </CCardBody>
  </CCard>
</template>
<script>
import * as icon from '@coreui/icons'
import vueImg from '@/assets/images/vue.jpg'
import TextBoxItemsList from '@/components/TextBoxItemsList'
import { computed } from 'vue'
import moment from 'moment'
import 'vue3-date-time-picker/dist/main.css'
import Datepicker from 'vue3-date-time-picker'
import 'vue3-date-time-picker/dist/main.css'
export default {
  props: {
    experience: Object,
  },
  components: { TextBoxItemsList, Datepicker },
  setup(props) {
    let dateFrom = {
      month: new Date(props.experience.startDate).getMonth() + 1,
      year: new Date(props.experience.startDate).getFullYear(),
    }
    let dateTo = {
      month: new Date(props.experience.endDate).getMonth() + 1,
      year: new Date(props.experience.endDate).getFullYear(),
    }
    let experienceForm = Object
    const experienceFormComputed = computed({
      get() {
        dateFrom = {
          month: new Date(props.experience.startDate).getMonth() + 1,
          year: new Date(props.experience.endDate).getFullYear(),
        }
        console.log(props.experience.startDate)
        return props.experience
      },
      set(value) {
        experienceForm = value
      },
    })
    const functionsComputed = computed({
      get() {
        let jobsfuntionsReturn = []
        props.experience.jobFunctionItems.forEach((item) => {
          let itemOut = {
            id: 0,
            name: '',
          }
          itemOut.id = item.id
          itemOut.name = item.name
          jobsfuntionsReturn.push(itemOut)
        })
        return jobsfuntionsReturn
      },
    })
    const formatDate = function (date) {
      return moment().format('MM/YYYY', date)
    }
    const experienceComputed = computed({
      get() {
        let skillsReturn = []
        props.experience.skillItems.forEach((item) => {
          let itemOut = {
            id: 0,
            name: '',
          }
          itemOut.id = item.id
          itemOut.name = item.name
          skillsReturn.push(itemOut)
        })
        return skillsReturn
      },
    })
    const devComputed = computed({
      get() {
        let devReturn = []
        props.experience.devToolItems.forEach((item) => {
          let itemOut = {
            id: 0,
            name: '',
          }
          itemOut.id = item.id
          itemOut.name = item.name
          devReturn.push(itemOut)
        })
        return devReturn
      },
    })
    return {
      icon,
      vueImg,
      experienceComputed,
      devComputed,
      functionsComputed,
      experienceForm,
      experienceFormComputed,
      formatDate,
      dateTo,
      dateFrom,
    }
  },
}
</script>
