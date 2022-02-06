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
    <CTooltip
      content="Las opciones deshabilitadas están asociadas a alguna experiencia. Solo se pueden borrar las opciones que no están asociadas a alguna experiencia"
      placement="bottom"
    >
      <template #toggler="{ on }">
        <CIcon
          :icon="icon.cilInfo"
          color="secondary"
          style="margin-left: 1%"
          v-on="on"
        ></CIcon>
      </template>
    </CTooltip>
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
            @change="changeDefault"
          ></ItemsExperienceForm>
        </CRow>
        <CRow class="pl-1 pr-1">
          <CCol
            class="col-1"
            v-if="valuesDefaultSize != null && valuesDefaultSize < 16"
          >
            <CButton
              color="dark"
              size="sm"
              variant="ghost"
              @click="processItemsExpMultiselect()"
              >Guardar</CButton
            >
          </CCol>
          <CCol class="col-1" v-if="valuesDefaultSize >= 16">
            <CTooltip
              content=" El número de Items sin asociar no puede ser mayor de 15 elementos"
              placement="bottom"
            >
              <template #toggler="{ on }">
                <CIcon
                  :icon="icon.cilInfo"
                  color="secondary"
                  style="margin-left: 1%; margin-top: 15px"
                  v-on="on"
                ></CIcon>
              </template>
            </CTooltip>
          </CCol>
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
    let valuesDefaultSize = ref(0)
    const changeDefault = function (reply) {
      valuesDefaultSize.value = reply.length
    }
    let valuesDefault = computed({
      get() {
        if (store.getters.getExperienceItems != null) {
          const valuesDefault = store.getters.getExperienceItems
            .filter((item) => {
              return item.status === false
            })
            .map((item) => {
              return item.name
            })
          return valuesDefault
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
      valuesDefaultSize.value = 0
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
      changeDefault,
      toggleVisibleValue,
      visible,
      valuesDefaultSize,
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
