<template>
  <div class="bg-light min-vh-100 d-flex flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol :md="4">
          <CCardGroup>
            <CCard class="p-4">
              <CCardBody>
                <CForm @submit.prevent="this.procesarFormulario(this.user)">
                  <h1>Login</h1>
                  <h4 class="text-medium-emphasis">
                    Activar modo administrador
                  </h4>
                  <CInputGroup class="mb-3">
                    <CInputGroupText>
                      <CIcon icon="cil-user" />
                    </CInputGroupText>
                    <CFormInput
                      placeholder="Username"
                      autocomplete="username"
                      v-model="user.name"
                    />
                  </CInputGroup>
                  <CInputGroup class="mb-4">
                    <CInputGroupText>
                      <CIcon icon="cil-lock-locked" />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Password"
                      autocomplete="current-password"
                      v-model="user.passWord"
                    />
                  </CInputGroup>
                  <div class="mb-3">
                    <CFormLabel for="captchaInput"
                      >Captcha : {{ captchaGetting }}</CFormLabel
                    >
                    <CFormInput id="captchaInput" v-model="user.captchaInput" />
                  </div>
                  <CRow>
                    <CCol :xs="6">
                      <CButton color="primary" class="px-4"> Login </CButton>
                    </CCol>
                  </CRow>
                  <CRow class="mt-2" v-show="showError">
                    <CAlert color="danger" class="d-flex align-items-center">
                      <CIcon
                        :icon="icon.cilReportSlash"
                        class="flex-shrink-0 me-2"
                        width="24"
                        height="24"
                      >
                      </CIcon>
                      <div>{{ getErrorIn }}</div>
                    </CAlert>
                  </CRow>
                </CForm>
              </CCardBody>
            </CCard>
          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import router from '@/router'
import { state } from '@/store/modules/login'
import * as icon from '@coreui/icons'
export default {
  name: 'Login',
  data: () => ({
    user: {
      name: null,
      passWord: null,
      captchaInput: '',
    },
    captchaGetting: localStorage.getItem('captcha'),
    errorIn: '',
  }),
  methods: {
    ...mapActions({
      getCaptcha: 'getCaptcha',
      procesarFormulario: 'procesarFormulario',
    }),
    resetPage() {
      localStorage.removeItem('captcha')
      localStorage.removeItem('attemps')
      router.go(0)
    },
  },
  setup() {
    return {
      icon,
    }
  },
  created() {
    this.getCaptcha()
    state.intentosMax = localStorage.getItem('attemps')
  },
  computed: {
    ...mapState([
      'captcha',
      'attemps',
      'aciertoMsg',
      'intentos',
      'intentosMax',
      'acierto',
      'error',
    ]),
    showError: {
      cached: false,
      get() {
        console.log('error: ' + state.error)
        return this.$store.getters.getErrors !== ''
      },
    },
    getErrorIn: {
      cached: false,
      get() {
        console.log('error: ' + state.error)
        return this.$store.getters.getErrors
      },
    },
  },
}
</script>
