<template>
  <ve-line :data="chartData" :settings="chartSettings"></ve-line>
</template>

<script>
import { fetchList } from '@/api/stock'

export default {
  name: 'HelloWorld',
  data () {
    return {
      chartData: null,
      stock: null
    }
  },
  created () {
    this.getStock()
  },
  methods: {
    getStock () {
      fetchList().then(response => {
        this.chartData = {
          columns: ['chg', 'num'],
          rows: response.data
        }
        this.chartSettings = {
          metrics: ['num'],
          dimension: ['chg']
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>

</style>
