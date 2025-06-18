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
    <el-table-column prop="年" label="年" min-width="100" align="center"/>
    <el-table-column prop="月" label="月" min-width="100" align="center"/>
    <el-table-column prop="日" label="日" min-width="100" align="center"/>
    <el-table-column prop="expectation" label="期望输出" min-width="100" align="center"/>
    <el-table-column prop="actual" label="实际输出" min-width="100" align="center"/>
    <el-table-column prop="state" label="测试结果" min-width="100" align="center"/>
  </el-table>
  <h2>测试成功率为: {{ successRate }}</h2>
</template>

<script setup>
import data from '@/mock/Exercise10.json'
import { ref } from 'vue'
import {getNextDate} from '@/utils/getNextDate.js'

const testData = ref(data)
const successRate = ref('NULL')

const doTest = () => {
  testData.value.forEach(item => {
    item.actual = getNextDate(item)
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