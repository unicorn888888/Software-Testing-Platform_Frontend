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
    <el-table-column prop="id" label="id" min-width="100" />
    <el-table-column prop="V" label="年销售额" min-width="100" />
    <el-table-column prop="R" label="现金到帐率" min-width="100" />
    <el-table-column prop="D" label="请假天数" min-width="100" />
    <el-table-column prop="Coverage Combination" label="覆盖组合" min-width="100" />
    <el-table-column prop="Path" label="路径" min-width="100" />
    <el-table-column prop="expectation" label="预期结果" min-width="100" />
    <el-table-column prop="actual" label="实际佣金" min-width="100" />
    <el-table-column prop="state" label="测试结果" min-width="100" />
  </el-table>
  <h2>测试成功率为: {{ successRate }}</h2>
</template>

<script setup>
import data from '@/mock/Exercise16.json'
import { ref } from 'vue'
import { sales } from '@/utils/sales.js'

const testData = ref(data)
const successRate = ref('NULL')

const doTest = () => {
  testData.value.forEach(item => {
    item.actual = sales(item)
    item.state = item.actual === item.expectation ? '测试通过' : '测试不通过'
  })

  const total = testData.value.length
  const passedCount = testData.value.filter(item => item.state === '测试通过').length
  successRate.value = total === 0 ? '0%' : ((passedCount / total) * 100).toFixed(2) + '%'
  console.log(successRate.value)
}

const reset = () => {
  testData.value.forEach(item => {
    item.actual = ''
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