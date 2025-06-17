<template>
  <div class="main-header" style="display: flex; gap: 10px;">
    <el-select v-model="testIndex" style="width: 200px" placeholder="请选择测试方法">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
    </el-select>
    <el-button class="main-button" @click="doTest">
      进行测试
    </el-button>
    <el-button class="reset-button" @click="reset">
      重置
    </el-button>
  </div>
  <el-table :data="systemData" border style="width: 100%" >
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
import data2 from '@/mock/Exercise7-2.json'
import data3 from '@/mock/Exercise7-3.json'
import { ref , computed} from 'vue'
import { phoneBill } from '@/utils/phoneBill.js'

const successRate = ref('NULL')

const testIndex = ref(0)
const testData = ref([data1, data2, data3])
const systemData = computed(() => {
    return testData.value[testIndex.value]
})
const options = ref([
    { value: 0, label: "边界值分析" },
    { value: 1, label: "等价类法" },
    { value: 2, label: "决策表" }
])

const doTest = () => {
  testData.value[testIndex.value].forEach(item => {
    item.actual = phoneBill({ A: item.time, B: item.count })
    if(typeof item.actual === 'number'){
      item.actual=item.actual.toFixed(4)
      item.state =item.actual=== item.expectation.toFixed(4) ? '测试通过' : '测试不通过'
    }
    else{
      item.state =item.actual === item.expectation ? '测试通过' : '测试不通过'
    }
    
  })

  const total = testData.value[testIndex.value].length
  const passedCount = testData.value[testIndex.value].filter(item => item.state === '测试通过').length
  successRate.value = total === 0 ? '0%' : ((passedCount / total) * 100).toFixed(2) + '%'
  console.log(successRate.value)
}

const reset = () => {
  testData.value[testIndex.value].forEach(item => {
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