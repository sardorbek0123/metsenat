<template>
  <div class="container">
    <div class="mt-10 grid grid-cols-3 gap-4">
      <PaidMoney
          v-for="card in cards"
          :key="card.id"
          :title="card.title"
          :amount="card.amount"
          :currency="card.currency"
          :bgColor="card.bgColor"
          :textColor="card.textColor"
      />
    </div>
    <div id="chart" class="mt-7 bg-white rounded-lg">
      <VueApexCharts type="line" height="350" :options="chartOptions" :series="series"></VueApexCharts>
    </div>
  </div>
</template>

<script setup lang="ts">
import PaidMoney from '@/components/Card/PaidMoney.vue'
import { ref } from 'vue'
import type { ApexOptions } from 'apexcharts'
import VueApexCharts from "vue3-apexcharts";

const series = ref([
  {
    name: 'Homiylar',
    data: [110, 100, 800, 3000, 2000, 900, 3000, 7500, 8000, 5100, 6900, 7500]
  },
  {
    name: 'Talabalar',
    data: [380, 750, 1000, 1300, 1000, 750, 520, 800, 7000, 12000, 10000, 15000]
  }
])

const chartOptions = ref<ApexOptions>({
  chart: {
    height: 350,
    type: 'line',
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  title: {
    text: 'Homiylar va talabalar soni',
    offsetX: 10,
    offsetY: 10,
    style: {
      fontFamily: 'Helvetica, Arial, sans-serif',
      fontWeight: '700',
      fontSize: '24px',
      color: '#373d3f'
    }
  },
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'],
      opacity: 0.5
    }
  },
  xaxis: {
    categories: ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul', 'Avgust', 'Sentabr', 'Oktabr', 'Noyabr', 'Dekabr']
  },
  yaxis: {
    min: 100,
    max: 15000,
    tickAmount: 6,
  },
  colors: ['#4C6FFF', '#FF92AE']
})


const cards = [
  {
    id: 1,
    title: 'Jami to‘langan summa',
    amount: '1 684 325',
    currency: 'UZS',
    bgColor: 'bg-blue-500/10',
    textColor: 'text-blue-300'
  },
  {
    id: 2,
    title: 'Jami so‘ralgan summa',
    amount: '14 098 530',
    currency: 'UZS',
    bgColor: 'bg-yellow-300/10',
    textColor: 'text-yellow-300'
  },
  {
    id: 3,
    title: 'To‘lanishi kerak summa',
    amount: '12 414 205',
    currency: 'UZS',
    bgColor: 'bg-orange-300/10',
    textColor: 'text-orange-300'
  }
]

</script>

<style>

.apexcharts-toolbar {
  display: none !important;
}

.apexcharts-title-text {
  margin-left: 20px !important;
  font-size: 24px !important;
}

.apexcharts-tooltip .apexcharts-theme-light {
  border-radius: 8px !important;
  border: 1px solid #DFE6FE !important;
  background: linear-gradient(180deg, #F3F4FE 0%, rgba(243, 244, 254, 0.00) 100%) !important;
  backdrop-filter: blur(5px) !important;
}

.apexcharts-yaxistooltip g.yaxistooltip-line {
  stroke-dasharray: 4 !important;
}

.apexcharts-grid .apexcharts-gridlines-horizontal {
  background-color: transparent !important;
}

.apexcharts-legend.apexcharts-align-center {
  position: absolute !important;
  bottom: 0 !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
}

</style>