<template>
  <div class="hello">
    <ve-heatmap :data="chartData"></ve-heatmap>
  </div>
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
          columns: ['code', 'chg'],
          rows: response.data
        }
        console.log(self.stock)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>

</style>
