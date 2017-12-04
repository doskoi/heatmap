<template>
  <ve-histogram :data="chartData" :settings="chartSettings"></ve-histogram>
</template>

<script>
import { fetchList } from '@/api/stock'

export default {
  name: 'HelloWorld',
  data () {
    return {
      chartData: null,
      stock: null,
      chartSettings: null
    }
  },
  created () {
    this.getStock()
    this.refresh()
  },
  methods: {
    refresh () {
      setInterval(() => {
        this.getStock()
      }, 3000)
    },
    getStock () {
      fetchList().then(response => {
        this.chartData = {
          columns: ['chg', 'num'],
          rows: response.data
        }
        this.chartSettings = {
          dimension: ['chg'],
          metrics: ['num'],
          labelMap: {
            num: '数量',
            chg: '涨跌幅'
          }
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
