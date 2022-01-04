<template>
  <CCard>
    <CCardHeader>
      <h4 style="float: left">Curriculum vitae</h4>
      <a href="CurriculoIsraelMoreno150421.pdf"
        ><CButton style="float: right" color="dark">Descargar</CButton>
      </a>
    </CCardHeader>
    <CCardBody>
      <CCol>
        <CRow style="height: 700px; overflow-y: scroll">
          <pdf
            ref="myPdfComponent"
            v-for="i in numPages"
            :key="i"
            :src="src"
            :page="i"
            style="display: inline-block; width: 100%"
          ></pdf>
        </CRow>
      </CCol>
    </CCardBody>
  </CCard>
</template>

<script>
import pdf from 'vue3-pdf'

export default {
  components: {
    pdf,
  },
  data() {
    return {
      src: pdf.createLoadingTask('CurriculoIsraelMoreno150421.pdf'),
      numPages: undefined,
    }
  },
  created() {
    this.src.promise.then((pdf) => {
      this.numPages = pdf.numPages
    })
  },
}
</script>
