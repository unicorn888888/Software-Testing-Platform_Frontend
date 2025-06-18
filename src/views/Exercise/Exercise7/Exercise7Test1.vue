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
    <el-table-column prop="time" label="本月通话分钟数" min-width="100" align="center"/>
    <el-table-column prop="count" label="不按时缴费次数" min-width="100" align="center"/>
    <el-table-column prop="expectation" label="期望输出" min-width="100" align="center"/>
    <el-table-column prop="actual" label="实际输出" min-width="100" align="center"/>
    <el-table-column prop="state" label="测试结果" min-width="100" align="center"/>
  </el-table>
  <h2>测试成功率为: {{ successRate }}</h2>
</template>

<script setup>
import data1 from '@/mock/Exercise7-1.json'
import { ref } from 'vue'
import { getBill } from '@/utils/phoneBill.js'

const successRate = ref('NULL')
const testData = ref(data1)


const doTest = () => {
  testData.value.forEach(item => {
    item.actual = getBill(item)
    if(typeof item.actual === 'number'){
      item.actual=item.actual.toFixed(4)
      item.state =item.actual=== item.expectation.toFixed(4) ? '测试通过' : '测试不通过'
    }
    else{
      item.state =item.actual === item.expectation ? '测试通过' : '测试不通过'
    }
    
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