<template>
  <div class="main-header" style="display: flex; gap: 10px;">
    <el-button class="main-button" @click="doTest">
      进行测试
    </el-button>
    <el-button class="reset-button" @click="reset">
      重置
    </el-button>
  </div>
  <el-table :data="systemData" border style="width: 100%" >
    <el-table-column prop="id" label="id" min-width="100" align="center"/>
    <el-table-column prop="A" label="A" min-width="100" align="center"/>
    <el-table-column prop="B" label="B" min-width="100" align="center"/>
    <el-table-column prop="C" label="C" min-width="100" align="center"/>
    <el-table-column prop="expectation" label="期望输出" min-width="100" align="center"/>
    <el-table-column prop="actual" label="实际输出" min-width="100" align="center"/>
    <el-table-column prop="state" label="测试结果" min-width="100" align="center"/>
  </el-table>
  <h2>测试成功率为: {{ successRate }}</h2>
</template>

<script setup>
import system_1 from '@/mock/Exercise1.json'
import { ref } from 'vue'
import { judgeTriangle } from '@/utils/judgeTriangle.js'

const systemData = ref(system_1)
const successRate = ref('NULL')

const doTest = () => {
  systemData.value.forEach(item => {
    item.actual = judgeTriangle(item)
    item.state = item.actual === item.expectation ? '测试通过' : '测试不通过'
  })

  const total = systemData.value.length
  const passedCount = systemData.value.filter(item => item.state === '测试通过').length
  successRate.value = total === 0 ? '0%' : ((passedCount / total) * 100).toFixed(2) + '%'
  console.log(successRate.value)
}

const reset = () => {
  systemData.value.forEach(item => {
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