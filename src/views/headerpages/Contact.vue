<template>
  <CCard>
    <CCardHeader>
      <h4 style="float: left">Formulario de contacto</h4>
    </CCardHeader>
    <CCardBody>
      <CForm>
        <div class="mb-3">
          <CFormLabel for="mail">Mail</CFormLabel>
          <CFormInput required="true" type="email" id="mail" placeholder="" />
        </div>
        <div class="mb-3">
          <CFormLabel for="asunto">Asunto</CFormLabel>
          <CFormInput type="text" required="true" id="asunto" placeholder="" />
        </div>
        <div class="mb-3">
          <CFormLabel for="mensaje">Mensaje</CFormLabel>
          <CFormTextarea id="mensaje" rows="3"></CFormTextarea>
        </div>
        <div class="col-auto">
          <CButton type="submit" color="dark" class="mb-3">Enviar</CButton>
        </div>
      </CForm>
    </CCardBody>
  </CCard>
</template>
<script>
export default {
  components: {},
}
</script>
