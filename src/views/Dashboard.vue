<template>
  <Toast :title="title" :body="body" :bodyOk="bodyOk" />
  <div>
    <CRow>
      <CCol :md="12">
        <CCard>
          <CCardHeader>En una frase..</CCardHeader>
          <CCardBody>
            <blockquote class="blockquote mb-0">
              <p>
                <i v-if="admin == null">
                  {{ phraseEv }}
                </i>
              </p>
              <div class="mb-3" v-if="admin != null">
                <CForm @submit.prevent="processPhraseFormMethod()">
                  <CFormLabel for="exampleFormControlTextarea1"
                    >Editar frase importante</CFormLabel
                  >
                  <CFormTextarea
                    id="exampleFormControlTextarea1"
                    rows="3"
                    v-model="phraseEv"
                  >
                  </CFormTextarea>
                  <CButton type="submit" color="dark" class="mb-3 mt-2"
                    >Actualizar</CButton
                  >
                </CForm>
              </div>
            </blockquote>
          </CCardBody>
        </CCard>

        <CCard class="mb-4">
          <CCardBody>
            <CRow>
              <CCol :sm="9">
                <h4 id="traffic" class="card-title mb-0">
                  {{ graphicDataPrincipalData.title }}
                </h4>
                <div class="small text-medium-emphasis">
                  {{ graphicDataPrincipalData.subTitle }}
                </div>
              </CCol>
            </CRow>
            <CRow>
              <Main-chart-example
                v-bind:graphicDataList="graphicDataList"
                v-bind:graphicDataPrincipalData="graphicDataPrincipalData"
                :key="reload"
                style="height: 300px; max-height: 300px; margin-top: 40px"
              />
            </CRow>
          </CCardBody>
          <CCardFooter>
            <CRow :xs="{ cols: 1 }" :md="{ cols: 5 }" class="text-center">
              <CCol class="mb-sm-2 mb-0">
                <div class="text-medium-emphasis">Java</div>
                <strong>Spring / Struts ORM´s ...</strong>
                <CProgress
                  class="mt-2"
                  color="success"
                  thin
                  :precision="1"
                  :value="100"
                />
              </CCol>
              <CCol class="mb-sm-2 mb-0 d-md-down-none">
                <div class="text-medium-emphasis">HTML/CSS/javascript</div>
                <strong>Vue..(empezando)</strong>
                <CProgress
                  class="mt-2"
                  color="info"
                  thin
                  :precision="1"
                  :value="100"
                />
              </CCol>
              <CCol class="mb-sm-2 mb-0">
                <div class="text-medium-emphasis">Bases de Datos</div>
                <strong>Oracle/MySQL..</strong>
                <CProgress
                  class="mt-2"
                  color="warning"
                  thin
                  :precision="1"
                  :value="100"
                />
              </CCol>
              <CCol class="mb-sm-2 mb-0">
                <div class="text-medium-emphasis">Servidores/nube</div>
                <strong>Tomcat/AWS..</strong>
                <CProgress
                  class="mt-2"
                  color="danger"
                  thin
                  :precision="1"
                  :value="100"
                />
              </CCol>
              <CCol class="mb-sm-2 mb-0 d-md-down-none">
                <div class="text-medium-emphasis">Otros</div>
                <strong>Git/Svn, Scrum..</strong>
                <CProgress class="mt-2" :value="100" thin :precision="1" />
              </CCol>
            </CRow>
          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>
import MainChartExample from './charts/MainChartExample'
import Toast from '@/components/Toast'
import { useStore } from 'vuex'
import { computed, onBeforeMount } from 'vue'

export default {
  name: 'Dashboard',
  components: {
    MainChartExample,
    Toast,
  },

  setup() {
    const store = useStore()
    let newPhrase = ''
    let trigger = 0
    function processPhraseFormMethod() {
      store.dispatch('processPhraseForm', newPhrase)
    }
    const admin = localStorage.getItem('admin')
    onBeforeMount(() => {
      // eslint-disable-next-line no-constant-condition
      if (
        store.getters.getGraphicValueList == '' ||
        store.getters.getGraphicValueList.length == 0
      )
        store.dispatch('getGraphicDataAndPhrase')
    })
    const phraseEv = computed({
      get() {
        return store.getters.getPhrase
      },
      set(val) {
        newPhrase = val
      },
    })
    const title = 'Aviso'
    // control datos respuesta toast
    const body = computed(() => store.getters.getErrorMsg)
    const bodyOk = computed(() => store.getters.getAciertoMsg)
    //Fin
    //datos para grafica
    const graphicDataList = computed(() => store.getters.getGraphicValueList)
    const graphicDataPrincipalData = computed(
      () => store.getters.getGraphicPrincipalData,
    )
    //fin
    // si no hay datos de la gráfica recargamos el componente
    const reload = computed(() => {
      if (store.getters.getGraphicValueList.length == 0) return 1
      else return 0
    })
    //fin
    let date = new Date()
    const thisYear = date.getFullYear()

    return {
      thisYear,
      phraseEv,
      graphicDataList,
      reload,
      graphicDataPrincipalData,
      admin,
      processPhraseFormMethod,
      newPhrase,
      trigger,
      body,
      bodyOk,
      title,
    }
  },
}
</script>
