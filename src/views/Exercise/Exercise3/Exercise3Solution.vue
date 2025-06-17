<template>
  <div class="p-6 space-y-6 bg-white rounded shadow text-gray-800">

    <!-- 一、测试背景与分析目标 -->
    <section>
      <h2 class="text-xl font-semibold mb-2">一、测试背景与分析目标</h2>
      <p>该模块负责对公司员工进行年终考评，综合考虑以下因素：</p>
      <ul class="list-disc ml-6 mt-2 space-y-1">
        <li>工作时间长短（计年）：公司成立于 2000 年初，软件使用到 2035 年底，范围为 0 到 35 年；</li>
        <li>请假天数（单位：天）：范围为 0 到 19 天，20 天及以上（含 20）将免于考评；</li>
        <li>员工级别：从 1 到 5，共 5 个等级；</li>
        <li>本年度销售总额：本题未给定边界，暂不列入边界测试考虑。</li>
      </ul>
    </section>

    <!-- 二、测试方法与结果 -->
    <section>
      <h2 class="text-xl font-semibold mb-2">二、测试方法与结果</h2>

      <!-- 1. 基本边界值测试分析 -->
      <h3 class="text-lg font-semibold mt-4">1. 基本边界值测试分析</h3>
      <p>每个变量的五个取值：最小值、最小内值、正常值、最大内值、最大值。其他变量保持正常值。</p>

      <el-table :data="basicBoundaryData" style="width: 100%; margin-top: 10px;" border>
        <el-table-column prop="input" label="输入变量" />
        <el-table-column prop="min" label="最小值" />
        <el-table-column prop="minIn" label="最小内值" />
        <el-table-column prop="normal" label="正常值" />
        <el-table-column prop="maxIn" label="最大内值" />
        <el-table-column prop="max" label="最大值" />
      </el-table>

      <p class="mt-2">每个变量测试 5 个值；总变量数量为 3；总测试用例数：5 × 3 = <strong>15 个</strong></p>

      <!-- 2. 最坏情况边界值测试分析 -->
      <h3 class="text-lg font-semibold mt-6">2. 最坏情况边界值测试分析</h3>
      <p>最坏情况边界值测试是将所有变量的所有边界值进行组合，构成立方笛卡尔积：</p>
      <p>工作时间（5） × 请假天数（5） × 员工级别（5）</p>
      <p>总测试用例数：<strong>5 × 5 × 5 = 125 个</strong></p>

      <!-- 3. 健壮边界值测试分析 -->
      <h3 class="text-lg font-semibold mt-6">3. 健壮边界值测试分析（非法输入）</h3>
      <p>健壮边界值测试在基本边界的基础上加入非法值：</p>
      <p>对“工作时间”而言：</p>
      <ul class="list-disc ml-6 mt-2">
        <li>最小外值：-1</li>
        <li>最大外值：36</li>
      </ul>

      <el-table :data="invalidTestData" style="width: 100%; margin-top: 10px;" border>
        <el-table-column prop="id" label="序号" />
        <el-table-column prop="years" label="工作时间（年）" />
        <el-table-column prop="leave" label="请假天数（天）" />
        <el-table-column prop="level" label="员工级别" />
        <el-table-column prop="desc" label="说明" />
      </el-table>
    </section>

    <!-- 三、结论与建议 -->
    <section>
      <h2 class="text-xl font-semibold mt-6 mb-2">三、结论与建议</h2>
      <ul class="list-disc ml-6 space-y-1">
        <li>基本边界值测试用例共 15 个，覆盖主要边界；</li>
        <li>最坏情况边界值测试用例共 125 个，适合用于高风险模块的完整覆盖；</li>
        <li>健壮性测试提供了对非法输入的防御验证，能增强系统的健壮性和用户容错设计；</li>
        <li>建议：实际测试中以基本边界值为主、最坏情况为补充、健壮值作鲁棒性验证。</li>
      </ul>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const basicBoundaryData = ref([
  {
    input: '工作时间（年）',
    min: 0,
    minIn: 1,
    normal: 15,
    maxIn: 34,
    max: 35
  },
  {
    input: '请假天数（天）',
    min: 0,
    minIn: 1,
    normal: 10,
    maxIn: 19,
    max: 20
  },
  {
    input: '员工级别',
    min: 1,
    minIn: 2,
    normal: 3,
    maxIn: 4,
    max: 5
  }
])

const invalidTestData = ref([
  { id: 1, years: -1, leave: 10, level: 3, desc: '工作时间低于最小值（非法）' },
  { id: 2, years: 36, leave: 10, level: 3, desc: '工作时间高于最大值（非法）' }
])

</script>



<script>
export default {
  name: 'Exercise3Solution'
}
</script>



