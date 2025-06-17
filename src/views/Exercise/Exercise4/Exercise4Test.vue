<template>
  <div class="main-header" style="display: flex; gap: 10px;">
    <el-button class="main-button" @click="doTest">
      进行测试
    </el-button>
    <el-button class="reset-button" @click="reset">
      重置
    </el-button>
  </div>
  <el-table :data="testData" border style="width: 100%" >
    <el-table-column prop="id" label="id" min-width="100" align="center"/>
    <el-table-column prop="hostQty" label="主机销售数量" min-width="100" align="center"/>
    <el-table-column prop="monitorQty" label="显示器销售数量" min-width="100" align="center"/>
    <el-table-column prop="peripheralQty" label="外设销售数量" min-width="100" align="center"/>

    <el-table-column prop="expectedSales" label="期望销售额" min-width="100" align="center"/>
    <el-table-column prop="expectedCommission" label="期望佣金" min-width="100" align="center"/>
    <el-table-column prop="actualSales" label="实际销售额" min-width="100" align="center"/>
    <el-table-column prop="actualCommission" label="实际佣金" min-width="100" align="center"/>

    <el-table-column prop="state" label="测试结果" min-width="100" align="center"/>
  </el-table>
  <h2>测试成功率为: {{ successRate }}</h2>
</template>

<script setup>
import data from '@/mock/Exercise4.json'
import { ref } from 'vue'
import { calculateSales } from '@/utils/calculateComputerSales.js'

const testData = ref(data)
const successRate = ref('NULL')

const doTest = () => {
  testData.value.forEach(item => {
    [item.actualSales, item.actualCommission] = calculateSales(item);
    item.state = item.actualSales === item.expectedSales && item.actualCommission === item.expectedCommission ? '测试通过' : '测试不通过'
  })

  const total = testData.value.length
  const passedCount = testData.value.filter(item => item.state === '测试通过').length
  successRate.value = total === 0 ? '0%' : ((passedCount / total) * 100).toFixed(2) + '%'
  console.log(successRate.value)
}

const reset = () => {
  testData.value.forEach(item => {
    item.actualSales = ''
    item.actualCommission = ''
    item.state = ''
  })
  successRate.value='NULL'
}
</script>

<style scoped>
.main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>