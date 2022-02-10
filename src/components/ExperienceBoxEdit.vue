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
          <div class="mb-4">
            <CFormLabel for="exampleFormControlInput1">
              <h6>Descripción</h6>
            </CFormLabel>
            <CFormTextarea
              type="text"
              id="exampleFormControlInput1"
              :value="experienceFormComputed.description"
            />
          </div>
        </CListGroupItem>
        <CListGroupItem>
          <CRow>
            <CCol md="9">
              <b>Función/es</b>
            </CCol>
            <Multiselect
              beforeList
              v-model="valuesFunctions"
              mode="tags"
              :searchable="true"
              :createTag="true"
              :options="functionsComputed"
            />
          </CRow>
        </CListGroupItem>
        <CListGroupItem>
          <CRow>
            <CCol md="9">
              <b>Tecnologías</b>
            </CCol>
            <Multiselect
              beforeList
              v-model="valuesSkills"
              mode="tags"
              :searchable="true"
              :createTag="true"
              :options="experienceComputed"
            />
          </CRow>
        </CListGroupItem>
        <CListGroupItem>
          <CRow>
            <CCol md="9">
              <b>Entornos de desarrollo</b>
            </CCol>
            <Multiselect
              beforeList
              v-model="valuesDevTools"
              mode="tags"
              :searchable="true"
              :createTag="true"
              :options="devComputed"
            />
          </CRow>
          <CRow>
            <CButton
              class="mt-3"
              color="dark"
              size="sm"
              @click="processExpForm()"
              >Editar experiencia</CButton
            >
          </CRow>
        </CListGroupItem>
      </CListGroup>
    </CCardBody>
  </CCard>
</template>
<script>
import * as icon from '@coreui/icons'
import vueImg from '@/assets/images/vue.jpg'
import { computed } from 'vue'
import 'vue3-date-time-picker/dist/main.css'
import Datepicker from 'vue3-date-time-picker'
import 'vue3-date-time-picker/dist/main.css'
import Multiselect from '@vueform/multiselect'
export default {
  props: {
    experience: Object,
    skillItems: [],
    devItems: [],
    jobFunctionItems: [],
  },
  components: { Datepicker, Multiselect },
  setup(props) {
    const processExpForm = function () {}
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
    const valuesFunctions = computed({
      get: () => {
        return props.experience.jobFunctionItems.map((i) => {
          return i.name
        })
      },
    })
    const functionsComputed = computed({
      get() {
        let jobsfuntionsReturn = []
        if (props.jobFunctionItems != null)
          props.jobFunctionItems.forEach((item) => {
            let itemOut = {}
            itemOut.id = item.id
            itemOut.value = item.name
            itemOut.label = item.name
            jobsfuntionsReturn.push(itemOut)
          })
        return jobsfuntionsReturn
      },
    })
    const valuesSkills = computed({
      get: () => {
        return props.experience.skillItems.map((i) => {
          return i.name
        })
      },
    })
    const experienceComputed = computed({
      get() {
        let skillsReturn = []
        if (props.skillItems != null)
          props.skillItems.forEach((item) => {
            let itemOut = {}
            itemOut.id = item.id
            itemOut.value = item.name
            itemOut.label = item.name
            skillsReturn.push(itemOut)
          })
        return skillsReturn
      },
    })
    const valuesDevTools = computed({
      get: () => {
        return props.experience.devToolItems.map((i) => {
          return i.name
        })
      },
    })
    const devComputed = computed({
      get() {
        let devReturn = []
        if (props.devItems != null)
          props.devItems.forEach((item) => {
            let itemOut = {}
            itemOut.id = item.id
            itemOut.value = item.name
            itemOut.label = item.name
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
      dateTo,
      dateFrom,
      valuesDevTools,
      valuesSkills,
      valuesFunctions,
      processExpForm,
    }
  },
}
</script>
