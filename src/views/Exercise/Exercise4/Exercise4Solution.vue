<template>
  <div class="p-6 space-y-6 bg-white rounded shadow text-gray-800 max-w-4xl mx-auto">
  
    <!-- 一、测试背景与目标 -->
    <section>
      <h2 class="text-xl font-semibold mb-2">一、测试背景与目标</h2>
      <p>该模块用于计算销售员月度销售总额与对应佣金。系统对以下输入进行处理：</p>
      <ul class="list-disc ml-6 mt-2 space-y-1">
        <li>主机数量：单价 ¥25，最多可销售 70 台；</li>
        <li>显示器数量：单价 ¥30，最多可销售 80 台；</li>
        <li>外设数量：单价 ¥45，最多可销售 90 台；</li>
        <li>系统规定：每月至少销售一套完整机器（1主机+1显示器+1外设）；</li>
      </ul>
      <p class="mt-2">
        当主机输入为 <strong>0</strong> 时，系统结束输入并计算销售总额与提成；<br />
        提成规则如下：<br />
        总额 ≤ 1000：提成 10%<br />
        1000 < 总额 ≤ 1800：提成 15%<br />
        总额 > 1800：提成 20%<br />
        若有任何输入值非法，则销售额和提成都为 -1
      </p>
    </section>

    <!-- 二、测试方法与结果 -->
    <section>
      <h2 class="text-xl font-semibold mb-2 mt-6">二、测试方法与结果</h2>

      <!-- 1. 输入边界值分析 -->
      <h3 class="text-lg font-semibold mt-4">1. 输入边界值分析</h3>
      <el-table
        :data="inputBoundaryData"
        border
        style="width: 100%; margin-top: 10px;"
      >
        <el-table-column prop="item" label="输入项" />
        <el-table-column prop="min" label="最小值" />
        <el-table-column prop="minIn" label="最小内值" />
        <el-table-column prop="normal" label="正常值" />
        <el-table-column prop="maxIn" label="最大内值" />
        <el-table-column prop="max" label="最大值" />
        <el-table-column prop="minOut" label="最小外值" />
        <el-table-column prop="maxOut" label="最大外值" />
      </el-table>
      <p class="mt-2 italic text-sm text-gray-600">
        注意：虽然理论最小值为 0，但因至少销售一整套设备（主+显+外）才能合格，实测中组合视为非法。
      </p>

      <!-- 2. 基本边界值测试用例设计 -->
      <h3 class="text-lg font-semibold mt-6">2. 基本边界值测试用例设计</h3>
      <p>仅改变一个输入项，其它保持正常值（主30、显30、外30）：</p>
      <el-table
        :data="basicTestCases"
        border
        style="width: 100%; margin-top: 10px;"
      >
        <el-table-column prop="id" label="序号" width="60" />
        <el-table-column prop="host" label="主机数量" width="100" />
        <el-table-column prop="monitor" label="显示器数量" width="110" />
        <el-table-column prop="peripheral" label="外设数量" width="100" />
        <el-table-column prop="desc" label="说明" />
      </el-table>
      <p class="mt-2 italic text-sm text-gray-600">
        合格输入示例：主机=30、显示器=30、外设=30，符合完整机器要求。
      </p>

      <!-- 3. 最坏情况边界值测试 -->
      <h3 class="text-lg font-semibold mt-6">3. 最坏情况边界值测试</h3>
      <p>
        最坏情况测试为每项边界的所有组合（5×5×5）：<br />
        主机边界值：0、1、30、69、70<br />
        显示器边界值：0、1、30、79、80<br />
        外设边界值：0、1、30、89、90<br />
        <strong>总用例数：125 个</strong>
      </p>

      <!-- 4. 健壮性边界值测试 -->
      <h3 class="text-lg font-semibold mt-6">4. 健壮性边界值测试（非法输入）</h3>
      <el-table
        :data="robustTestCases"
        border
        style="width: 100%; margin-top: 10px;"
      >
        <el-table-column prop="id" label="序号" width="60" />
        <el-table-column prop="host" label="主机数量" width="100" />
        <el-table-column prop="monitor" label="显示器数量" width="110" />
        <el-table-column prop="peripheral" label="外设数量" width="100" />
        <el-table-column prop="desc" label="说明" />
      </el-table>

      <!-- 5. 提成边界值测试 -->
      <h3 class="text-lg font-semibold mt-6">5. 提成边界值测试</h3>
      <el-table
        :data="commissionTestCases"
        border
        style="width: 100%; margin-top: 10px;"
      >
        <el-table-column prop="id" label="序号" width="60" />
        <el-table-column prop="amount" label="销售额（元）" width="110" />
        <el-table-column prop="rate" label="对应佣金率" width="110" />
        <el-table-column prop="example" label="示例组合" />
      </el-table>
    </section>

    <!-- 三、结论与建议 -->
    <section>
      <h2 class="text-xl font-semibold mt-6 mb-2">三、结论与建议</h2>
      <ul class="list-disc ml-6 space-y-1">
        <li>基本边界测试：13 个有效用例，快速发现界限缺陷；</li>
        <li>最坏情况边界测试：125 个用例，确保全面覆盖；</li>
        <li>健壮性测试：验证非法输入处理能力，提升系统稳定性；</li>
        <li>提成边界测试：确认提成计算准确性，防止临界值逻辑错误；</li>
        <li>系统应对非法输入（如负数、未售一套完整设备）进行处理，输出结果应为：销售额 = -1，提成 = -1。</li>
      </ul>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const inputBoundaryData = ref([
  {
    item: '主机数量',
    min: 0,
    minIn: 1,
    normal: 30,
    maxIn: 69,
    max: 70,
    minOut: -2,
    maxOut: 71
  },
  {
    item: '显示器数量',
    min: 0,
    minIn: 1,
    normal: 30,
    maxIn: 79,
    max: 80,
    minOut: -1,
    maxOut: 81
  },
  {
    item: '外设数量',
    min: 0,
    minIn: 1,
    normal: 30,
    maxIn: 89,
    max: 90,
    minOut: -1,
    maxOut: 91
  }
])

const basicTestCases = ref([
  { id: 1, host: 0, monitor: 30, peripheral: 30, desc: '主机最小值' },
  { id: 2, host: 1, monitor: 30, peripheral: 30, desc: '主机最小内值' },
  { id: 3, host: 30, monitor: 30, peripheral: 30, desc: '主机正常值' },
  { id: 4, host: 69, monitor: 30, peripheral: 30, desc: '主机最大内值' },
  { id: 5, host: 70, monitor: 30, peripheral: 30, desc: '主机最大值' },
  { id: 6, host: 30, monitor: 0, peripheral: 30, desc: '显示器最小值' },
  { id: 7, host: 30, monitor: 1, peripheral: 30, desc: '显示器最小内值' },
  { id: 8, host: 30, monitor: 79, peripheral: 30, desc: '显示器最大内值' },
  { id: 9, host: 30, monitor: 80, peripheral: 30, desc: '显示器最大值' },
  { id: 10, host: 30, monitor: 30, peripheral: 0, desc: '外设最小值' },
  { id: 11, host: 30, monitor: 30, peripheral: 1, desc: '外设最小内值' },
  { id: 12, host: 30, monitor: 30, peripheral: 89, desc: '外设最大内值' },
  { id: 13, host: 30, monitor: 30, peripheral: 90, desc: '外设最大值' }
])

const robustTestCases = ref([
  { id: 1, host: -2, monitor: 30, peripheral: 30, desc: '主机小于最小值（非法）' },
  { id: 2, host: 71, monitor: 30, peripheral: 30, desc: '主机大于最大值（非法）' },
  { id: 3, host: 30, monitor: -1, peripheral: 30, desc: '显示器小于最小值（非法）' },
  { id: 4, host: 30, monitor: 81, peripheral: 30, desc: '显示器大于最大值（非法）' },
  { id: 5, host: 30, monitor: 30, peripheral: -1, desc: '外设小于最小值（非法）' },
  { id: 6, host: 30, monitor: 30, peripheral: 91, desc: '外设大于最大值（非法）' },
  { id: 7, host: 0, monitor: 0, peripheral: 0, desc: '未销售完整机器（非法）' }
])

const commissionTestCases = ref([
  { id: 'A', amount: 1000, rate: '10%', example: '主机=13 显示器=13 外设=13' },
  { id: 'B', amount: 1001, rate: '15%', example: '主机=14 显示器=14 外设=14' },
  { id: 'C', amount: 1800, rate: '15%', example: '主机=24 显示器=24 外设=24' },
  { id: 'D', amount: 1801, rate: '20%', example: '主机=25 显示器=25 外设=25' }
])
</script>

<style scoped>
/* 可根据需要加一些样式 */
</style>


<script>
export default {
  name: 'Exercise4Solution'
}
</script>



