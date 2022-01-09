<template>
  <CModal
    scrollable
    :visible="visibleModal"
    @close="this.updateVisibleModal(false)"
  >
    <CModalHeader>
      <CModalTitle>{{ modalTitle }}</CModalTitle>
    </CModalHeader>
    <CModalBody>
      <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
      <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
      <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
      <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
      <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
      <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
      <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
      <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
      <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
      <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
      <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
      <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
      <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
      <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
      <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
      <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
      <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
      <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
      <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
      <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
      <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
      <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
      <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
      <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
      <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
      <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
      <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
      <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
      <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
      <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
      <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
    </CModalBody>
    <CModalFooter>
      <CButton color="secondary" @click="this.updateVisibleModal(false)"
        >Close</CButton
      >
      <CButton color="primary">Save changes</CButton>
    </CModalFooter>
  </CModal>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {}
  },
  methods: {
    ...mapActions({
      updateVisibleModal: 'updateVisibleModal',
    }),
  },
  computed: {
    visibleModal: function () {
      return this.$store.getters.getVisibleModal
    },
    modalTitle: function () {
      return this.$store.getters.getModalTitle
    },
  },
}
</script>
