<template>
  <CCol :md="md">
    <CRow>
      <ul id="lista1">
        <li
          style="float: left"
          v-for="(item, key) in textComputed"
          :key="item.id"
        >
          {{ item.name }}
          <span class="separador" v-show="textComputed.length - 1 > key"
            >|</span
          >
        </li>
      </ul>
    </CRow>
  </CCol>
</template>

<script>
import { computed } from 'vue'
export default {
  name: 'TextBoxItems',
  props: {
    textItems: Array,
    md: String,
  },
  setup(props) {
    const textComputed = computed({
      get() {
        console.log(props.textItems)
        return props.textItems
      },
    })
    return {
      textComputed,
    }
  },
}
</script>
<style>
#lista1 {
  font-size: 15px;
}
.separador {
  color: gray;
}
#lista1 li {
  display: inline;
  padding-left: 3px;
  padding-right: 3px;
  background-color: white;
}
a {
  color: white;
  text-decoration: none;
}
a:hover {
  color: black;
  background-color: lightgray;
}
</style>
