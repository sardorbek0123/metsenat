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
    <div id="chart" class="bg-amber-950">
      <apexchart type="line" height="350" :options="chartOptions" :series="series"></apexchart>
    </div>
  </div>
</template>

<script setup lang="ts">
import PaidMoney from '@/components/Card/PaidMoney.vue'
import { ref } from 'vue'
import { ApexOptions } from 'apexcharts'

const series = ref([
  {
    name: 'Desktops',
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
  }
])

const cards = [
  {
    id: 1,
    title: 'Jami to‘langan summa',
    amount: '1,684,325,000',
    currency: 'UZS',
    bgColor: 'bg-blue-500/10',
    textColor: 'text-blue-300'
  },
  {
    id: 2,
    title: 'Jami so‘ralgan summa',
    amount: '14,098,530,000',
    currency: 'UZS',
    bgColor: 'bg-yellow-300/10',
    textColor: 'text-yellow-300'
  },
  {
    id: 3,
    title: 'To‘lanishi kerak summa',
    amount: '12,414,205,000',
    currency: 'UZS',
    bgColor: 'bg-orange-300/10',
    textColor: 'text-orange-300'
  }
]

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
    text: 'Product Trends by Month',
    align: 'left'
  },
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'],
      opacity: 0.5
    }
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
  }
})
</script>
