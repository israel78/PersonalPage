<template>
  <CHeader position="sticky" class="mb-4">
    <CContainer fluid>
      <CHeaderToggler class="ps-1" @click="$store.commit('toggleSidebar')">
        <CIcon icon="cil-menu" size="lg" />
      </CHeaderToggler>
      <CHeaderBrand class="ml-2 d-lg-none" to="/">
        <img
          custom-class-name="sidebar-brand-narrow"
          src="@/assets/images/logo-letras-negras.png"
          :width="200"
          :height="75"
        />
      </CHeaderBrand>
      <CHeaderNav class="d-none d-md-flex me-auto">
        <CNavItem>
          <CNavLink href="#/headerpages/aboutthisweb">Sobre esta web</CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#/headerpages/contact">Contacto</CNavLink>
        </CNavItem>
      </CHeaderNav>
      <CHeaderNav>
        <CButton
          v-if="admin == null"
          class="me-2"
          color="dark"
          component="a"
          @click="toggleAdminMode"
          variant="ghost"
          >Modo edición contenido</CButton
        >
        <CButton
          v-if="admin != null"
          class="me-2"
          color="dark"
          component="a"
          @click="toggleAdminMode"
          variant="ghost"
          >Salir de modo edición contenido</CButton
        >
        <AppHeaderDropdownAccnt v-show="window.outerWidth > 600" />
      </CHeaderNav>
    </CContainer>
    <CHeaderDivider />
    <CContainer fluid>
      <AppBreadcrumb />
    </CContainer>
  </CHeader>
</template>

<script>
import AppBreadcrumb from './AppBreadcrumb'
import AppHeaderDropdownAccnt from './AppHeaderDropdownAccnt'
import { logo } from '@/assets/brand/logo'
import router from '@/router'
export default {
  name: 'AppHeader',
  components: {
    AppBreadcrumb,
    AppHeaderDropdownAccnt,
  },
  setup() {
    const admin = localStorage.getItem('admin')
    const toggleAdminMode = function () {
      if (localStorage.getItem('admin') != null) {
        localStorage.removeItem('admin')
        router.go(0)
      } else {
        router.push({ path: '/login' })
      }
    }
    return {
      logo,
      toggleAdminMode,
      admin,
    }
  },
}
</script>
