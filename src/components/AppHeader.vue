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
          <CNavLink href="#">Sobre esta web</CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#">Contacto</CNavLink>
        </CNavItem>
      </CHeaderNav>
      <CHeaderNav>
        <AppHeaderDropdownAccnt />
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
export default {
  name: 'AppHeader',
  components: {
    AppBreadcrumb,
    AppHeaderDropdownAccnt,
  },
  setup() {
    return {
      logo,
    }
  },
}
</script>
