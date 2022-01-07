<template>
  <CToaster placement="top">
    <CToast
      v-for="toast in toasts"
      :key="toast.title"
      v-bind:style="[
        toast.title === 'Error'
          ? { 'background-color': 'red', color: 'white' }
          : { 'background-color': 'green', color: 'white' },
      ]"
    >
      <CToastHeader closeButton>
        <span class="me-auto fw-bold">{{ toast.title }}</span>
      </CToastHeader>
      <CToastBody>
        {{ toast.content }}
      </CToastBody>
    </CToast>
  </CToaster>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      toasts: [],
    }
  },
  props: {
    title: String,
    body: String,
    bodyOk: String,
  },
  methods: {
    ...mapActions({
      setAciertoMsgToEmpty: 'setAciertoMsgToEmpty',
      setErrorMsgToEmpty: 'setErrorMsgToEmpty',
    }),
    createToast() {
      this.toasts.push({
        title: this.body !== '' ? 'Error' : 'Confirmación',
        content: this.body !== '' ? this.body : this.bodyOk,
      })
    },
  },
  watch: {
    body: function (current) {
      if (current !== '') this.createToast()
      setTimeout(this.setErrorMsgToEmpty(), 2000)
    },
    bodyOk: function (current) {
      if (current !== '') this.createToast()
      this.setAciertoMsgToEmpty()
    },
  },
}
</script>
