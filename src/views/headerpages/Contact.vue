<template>
  <CCard>
    <CCardHeader>
      <h4 style="float: left">Curriculum vitae</h4>
      <h4 style="float: right">
        <a href="CurriculoIsraelMoreno150421.pdf"
          ><CButton color="dark">Descargar</CButton></a
        >
      </h4>
    </CCardHeader>
    <CCardBody>
      <pdf src="CurriculoIsraelMoreno150421.pdf"></pdf>
    </CCardBody>
  </CCard>
</template>

<script>
import pdf from 'vue3-pdf'

export default {
  components: {
    pdf,
  },
}
</script>
