<template>
  <CFooter>
    <div>
      <span class="ms-1"
        >&copy; {{ new Date().getFullYear() }} Competencias y experiencia
        profesional de Adolfo Israel Moreno</span
      >
    </div>
    <div class="ms-auto">
      <span class="me-1" target="_blank"></span>
      <a href="https://coreui.io/vue"
        >Perfil de Linkedin <CIcon :icon="icon.cibLinkedinIn" size="xxl"
      /></a>
    </div>
  </CFooter>
</template>

<script>
import * as icon from '@coreui/icons'
export default {
  name: 'AppFooter',
  setup() {
    // count sera devuelto al template
    return { icon }
  },
}
</script>
