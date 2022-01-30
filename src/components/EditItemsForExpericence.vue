<template>
  <CContainer
    style="
      background-color: lightgray;
      padding-bottom: 0.5%;
      margin-bottom: 0.5%;
    "
  >
    <CCol>
      <h5>Editar</h5>
    </CCol>
    <CButton
      color="dark"
      @click="toggleVisibleValue('skillsItems')"
      :disabled="disabledSkills"
      style="margin-left: 1%; margin-bottom: 0.5%"
      >habilidades</CButton
    >
    <CButton
      @click="toggleVisibleValue('devToolsItems')"
      :disabled="disabledTools"
      style="margin-left: 1%; margin-bottom: 0.5%"
      color="dark"
      >herramientas de desarrollo</CButton
    >
    <CButton
      @click="toggleVisibleValue('functionsItems')"
      :disabled="disabledFunc"
      style="margin-left: 1%; margin-bottom: 0.5%"
      color="dark"
      >funciones</CButton
    >
    <CCollapse :visible="visible">
      <CContainer
        style="
          background-color: lightgray;
          padding-bottom: 0.5%;
          margin-bottom: 0.5%;
        "
      >
        <CRow class="pl-1 pr-1">
          <ItemsExperienceForm
            :title="title"
            :titleHeader="titleHeader"
            :optionsList="skillOptions"
            :valuesDefault="valuesDefault"
          ></ItemsExperienceForm>
        </CRow>
        <CRow class="ml-1 mr-1">
          <CButton
            class="col-1 mt-2"
            color="dark"
            size="sm"
            @click="processItemsExpMultiselect()"
            >Guardar</CButton
          >
          <CTooltip
            content="Las opciones deshabilitadas están asociadas a alguna experiencia. Solo se pueden borrar las opciones que no están asociadas a alguna experiencia"
            placement="bottom"
          >
            <template #toggler="{ on }">
              <CIcon :icon="icon.cilInfo" color="secondary" v-on="on"></CIcon>
            </template>
          </CTooltip>
        </CRow>
      </CContainer>
    </CCollapse>
  </CContainer>
</template>
<script>
import * as icon from '@coreui/icons'
import { ref, computed } from 'vue'
import ItemsExperienceForm from '@/components/ItemsExperienceForm'
import { useStore } from 'vuex'
export default {
  name: 'EditItemsForExpericence',
  components: { ItemsExperienceForm },
  setup() {
    const store = useStore()
    const valuesDefault = computed({
      get() {
        if (store.getters.getExperienceItems != null) {
          return store.getters.getExperienceItems
            .filter((item) => {
              return item.status === false
            })
            .map((item) => {
              return item.name
            })
        }
        return null
      },
    })
    const skillOptions = computed({
      get() {
        if (store.getters.getExperienceItems != null)
          return store.getters.getExperienceItems.map((item) => {
            return {
              id: item.id,
              value: item.name,
              label: item.name,
              disabled: item.status,
            }
          })
        return null
      },
    })
    let modelOptions = []
    const visible = ref(false)
    const disabledSkills = ref(false)
    const disabledTools = ref(false)
    const disabledFunc = ref(false)
    const title = ref('')
    const titleHeader = ref('')
    const toggleVisibleValue = (value) => {
      visible.value = !visible.value
      if (!visible.value) {
        disabledSkills.value = false
        disabledTools.value = false
        disabledFunc.value = false
      }
      switch (value) {
        case 'skillsItems':
          titleHeader.value = 'Habilidades'
          if (visible.value) {
            disabledSkills.value = false
            disabledTools.value = true
            disabledFunc.value = true
          }
          break
        case 'devToolsItems':
          titleHeader.value = 'Herramientas de desarrollo'
          if (visible.value) {
            disabledSkills.value = true
            disabledTools.value = false
            disabledFunc.value = true
          }
          break
        case 'functionsItems':
          titleHeader.value = 'Funciones'
          if (visible.value) {
            disabledSkills.value = true
            disabledTools.value = true
            disabledFunc.value = false
          }
          break
      }
      if (visible.value) store.dispatch('getExperienceItemsCall', value)
      title.value = value
      console.log(visible.value)
    }
    const processItemsExpMultiselect = () => {
      store.dispatch('processListItems', title.value)
      store.dispatch('setExperienceItemsSendToZeroAction')
    }
    return {
      toggleVisibleValue,
      visible,
      disabledSkills,
      disabledFunc,
      disabledTools,
      title,
      skillOptions,
      modelOptions,
      valuesDefault,
      titleHeader,
      icon,
      processItemsExpMultiselect,
    }
  },
}
</script>

<style scoped></style>
