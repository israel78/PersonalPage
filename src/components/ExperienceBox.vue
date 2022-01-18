<template>
  <CCard>
    <CCardImage
      orientation="top"
      src="https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg"
    />
    <CCardHeader>
      <h4 style="float: left">
        <CIcon :icon="icon.cilTerminal" /> {{ experience.title }}
      </h4>
      <p style="float: right">
        <CIcon :icon="icon.cilTerminal" />
        {{ formatDate(experience.startDate) }}
        -
        {{ formatDate(experience.endDate) }}
      </p>
    </CCardHeader>
    <CCardBody>
      <CListGroup flush>
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
export default {
  props: {
    experience: Object,
  },
  components: { TextBoxItemsList },
  setup(props) {
    const functionsComputed = computed({
      get() {
        let jobsfuntionsReturn = []
        props.experience.JobFunctions.forEach((item) => {
          let itemOut = {
            id: 0,
            name: '',
          }
          itemOut.id = item.id
          itemOut.name = item.jobFunctionName
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
        props.experience.skills.forEach((item) => {
          let itemOut = {
            id: 0,
            name: '',
          }
          itemOut.id = item.id
          itemOut.name = item.skillName
          skillsReturn.push(itemOut)
        })
        return skillsReturn
      },
    })
    const devComputed = computed({
      get() {
        let devReturn = []
        props.experience.developerTools.forEach((item) => {
          let itemOut = {
            id: 0,
            name: '',
          }
          itemOut.id = item.id
          itemOut.name = item.devToolName
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
      formatDate,
    }
  },
}
</script>
