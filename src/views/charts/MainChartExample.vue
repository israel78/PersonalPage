<template>
  <c-chart
    type="line"
    v-bind:data="data"
    :options="options"
    @get-dataset-at-event="aa"
    @get-element-at-event="aa"
    @get-elements-at-event="aa"
  />
</template>

<script>
import { CChart } from '@coreui/vue-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils/src'
import { watch } from 'vue'
export default {
  name: 'MainChartExample',
  components: {
    CChart,
  },

  props: {
    graphicDataList: {
      type: Array,
    },
    graphicDataPrincipalData: {
      type: Object,
    },
  },
  setup(props) {
    let labelIn = props.graphicDataList.map((element) => element.xvalue)
    let dataLineOne = props.graphicDataList.map((element) => element.yvalue1)
    let dataLineTwo = props.graphicDataList.map((element) => element.yvalue2)
    let dataLineTree = props.graphicDataList.map((element) => element.yvalue3)

    let data = {
      labels: labelIn,
      datasets: [
        {
          label: props.graphicDataPrincipalData.lineGraphicNameOne,
          backgroundColor: hexToRgba(getStyle('--cui-info'), 10),
          borderColor: getStyle('--cui-info'),
          pointHoverBackgroundColor: getStyle('--cui-info'),
          borderWidth: 2,
          data: dataLineOne,
          fill: true,
        },
        {
          label: props.graphicDataPrincipalData.lineGraphicNameTwo,
          backgroundColor: 'transparent',
          borderColor: getStyle('--cui-success'),
          pointHoverBackgroundColor: getStyle('--cui-success'),
          borderWidth: 2,
          data: dataLineTwo,
        },
        {
          label: props.graphicDataPrincipalData.lineGraphicNameTree,
          backgroundColor: 'transparent',
          borderColor: getStyle('--cui-danger'),
          pointHoverBackgroundColor: getStyle('--cui-danger'),
          borderWidth: 1,
          borderDash: [8, 5],
          data: dataLineTree,
        },
      ],
    }
    console.log(props.graphicDataList + 'valueprops')
    watch(props.graphicDataList, (currentValue, oldValue) => {
      console.log(currentValue)
      console.log(oldValue)
      if (currentValue.length == 0) this.$forceUpdate()
    })
    const options = {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
        },
      },
      scales: {
        x: {
          grid: {
            drawOnChartArea: false,
          },
        },
        y: {
          ticks: {
            beginAtZero: true,
            maxTicksLimit: 5,
            stepSize: Math.ceil(250 / 5),
            max: 250,
          },
        },
      },
      elements: {
        line: {
          tension: 0.4,
        },
        point: {
          radius: 0,
          hitRadius: 10,
          hoverRadius: 4,
          hoverBorderWidth: 3,
        },
      },
    }

    return {
      data,
      options,
    }
  },
  methods: {
    aa(value, value2) {
      console.log(value)
      console.log(value2)
    },
  },
}
</script>
