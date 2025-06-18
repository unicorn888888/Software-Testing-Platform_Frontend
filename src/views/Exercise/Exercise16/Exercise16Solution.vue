<template>
  <div class="p-4 space-y-12">
    <section>
      <h2>语句覆盖（Statement Coverage）</h2>
      <el-table :data="statementCoverage" border>
        <el-table-column prop="id" label="用例编号" />
        <el-table-column prop="path" label="路径" />
        <el-table-column prop="V" label="V" />
        <el-table-column prop="R" label="R" />
        <el-table-column prop="D" label="D" />
        <el-table-column prop="expected" label="预期结果" />
      </el-table>
    </section>

    <section>
      <h2>判断覆盖（Decision Coverage）</h2>
      <el-table :data="decisionCoverage" border>
        <el-table-column prop="id" label="用例编号" />
        <el-table-column prop="path" label="路径" />
        <el-table-column prop="V" label="V" />
        <el-table-column prop="R" label="R" />
        <el-table-column prop="D" label="D" />
        <el-table-column prop="expected" label="预期结果" />
      </el-table>
    </section>

    <section>
      <h2>条件覆盖（Condition Coverage）</h2>
      <p>由流程图得知，本程序共有 4 个判断语句。</p>
      <div>
        <h2 class="text-xl font-semibold">判断语句1</h2>
        <ul class="list-disc list-inside ml-4">
          <li>V &lt; 0 为真，记为 T1；V &lt; 0 为假，记为 F1</li>
          <li>R &lt; 0 为真，记为 T2；R &lt; 0 为假，记为 F2</li>
          <li>R &gt; 1 为真，记为 T3；R &gt; 1 为假，记为 F3</li>
          <li>D &lt; 0 为真，记为 T4；D &lt; 0 为假，记为 F4</li>
          <li>D &gt; 366 为真，记为 T5；D &gt; 366 为假，记为 F5</li>
        </ul>
      </div>

      <div>
        <h2 class="text-xl font-semibold">判断语句2</h2>
        <ul class="list-disc list-inside ml-4">
          <li>V &gt; 200 为真，记为 T6；V &gt; 200 为假，记为 F6</li>
          <li>D &lt;= 10 为真，记为 T7；D &lt;= 10 为假，记为 F7</li>
        </ul>
      </div>

      <div>
        <h2 class="text-xl font-semibold">判断语句3</h2>
        <ul class="list-disc list-inside ml-4">
          <li>R &gt; 0.6 为真，记为 T8；R &gt; 0.6 为假，记为 F8</li>
        </ul>
      </div>

      <div>
        <h2 class="text-xl font-semibold">判断语句4</h2>
        <ul class="list-disc list-inside ml-4">
          <li>R &lt;= 0.85 为真，记为 T9；R &lt;= 0.85 为假，记为 F9</li>
        </ul>
      </div>

      <el-table :data="conditionCoverage" border>
        <el-table-column prop="id" label="用例编号" />
        <el-table-column prop="V" label="V" />
        <el-table-column prop="R" label="R" />
        <el-table-column prop="D" label="D" />
        <el-table-column prop="path" label="路径" />
        <el-table-column prop="condition" label="覆盖条件" />
        <el-table-column prop="expected" label="预期结果" />
      </el-table>
    </section>

    <section>
      <h2>判断-条件覆盖（Decision-Condition Coverage）</h2>
      <el-table :data="decisionConditionCoverage" border>
        <el-table-column prop="id" label="用例编号" />
        <el-table-column prop="V" label="V" />
        <el-table-column prop="R" label="R" />
        <el-table-column prop="D" label="D" />
        <el-table-column prop="path" label="路径" />
        <el-table-column prop="condition" label="覆盖条件" />
        <el-table-column prop="expected" label="预期结果" />
      </el-table>
    </section>

    <section>
      <h2>条件组合覆盖（Condition Combination Coverage）</h2>
      <el-table :data="conditionCombinationCoverage" border>
        <el-table-column prop="combination" label="组合号" />
        <el-table-column prop="condition" label="条件" />
        <el-table-column prop="coverage" label="覆盖" />
      </el-table>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const statementCoverage = ref([
  { id: 'TS1', path: 'ab', V: -1, R: 0, D: 0, expected: -1 },
  { id: 'TS2', path: 'acdf', V: 500, R: 0.8, D: 5, expected: 100 },
  { id: 'TS3', path: 'acdg', V: 500, R: 0.1, D: 5, expected: 0 },
  { id: 'TS4', path: 'aceh', V: 400, R: 0.6, D: 15, expected: 100 },
  { id: 'TS5', path: 'acei', V: 300, R: 0.9, D: 15, expected: 100 }
])

const decisionCoverage = ref([...statementCoverage.value])

const conditionCoverage = ref([
  { id: 'TS1', V: -1, R: -1, D: -1, path: 'ab', condition: 'T1 T2 F3 T4 F5 F6 T7 F8 T9', expected: -1 },
  { id: 'TS2', V: 250, R: 2, D: 367, path: 'ab', condition: 'F1 F2 T3 F4 T5 T6 F7 T8 F9', expected: -1 }
])

const decisionConditionCoverage = ref([
  { id: 'TS1', V: -1, R: -1, D: -1, path: 'ab', condition: 'T1 T2 F3 T4 F5 F6 T7 F8 T9', expected: -1 },
  { id: 'TS2', V: 250, R: 2, D: 367, path: 'ab', condition: 'F1 F2 T3 F4 T5 T6 F7 T8 F9', expected: -1 },
  { id: 'TS3', V: 500, R: 0.8, D: 5, path: 'acdf', condition: 'F1 F2 F3 F4 F5 T6 T7 T8 T9', expected: 100 },
  { id: 'TS4', V: 500, R: 0.1, D: 5, path: 'acdg', condition: 'F1 F2 F3 F4 F5 T6 T7 T8 T9', expected: 0 },
  { id: 'TS5', V: 400, R: 0.7, D: 15, path: 'aceh', condition: 'F1 F2 F3 F4 F5 T6 T7 T8 T9', expected: 100 },
  { id: 'TS6', V: 300, R: 0.9, D: 15, path: 'acei', condition: 'F1 F2 F3 F4 F5 T6 T7 T8 T9', expected: 0 }
])

const conditionCombinationCoverage = ref([
  { combination: 1, condition: 'V<0 R<0 D<0', coverage: 'T1 T2 F3 T4 F5' },
  { combination: 2, condition: 'V<0 R<0 0<=D<=366', coverage: 'T1 T2 F3 F4 F5' },
  { combination: 3, condition: 'V<0 R<0 366<D', coverage: 'T1 T2 F3 F4 T5' },
  { combination: 4, condition: 'V<0 0<=R<=1 D<0', coverage: 'T1 F2 F3 T4 F5' },
  { combination: 5, condition: 'V<0 0<=R<=1 0<=D<=366', coverage: 'T1 F2 F3 F4 F5' },
  { combination: 6, condition: 'V<0 0<=R<=1 366<D', coverage: 'T1 F2 F3 F4 T5' },
  { combination: 7, condition: 'V<0 1<R D<0', coverage: 'T1 F2 T3 T4 F5' },
  { combination: 8, condition: 'V<0 1<R 0<=D<=366', coverage: 'T1 F2 T3 F4 F5' },
  { combination: 9, condition: 'V<0 1<R 366<D', coverage: 'T1 F2 T3 F4 T5' },
  { combination: 10, condition: '0<=V R<0 D<0', coverage: 'F1 T2 F3 T4 F5' },
  { combination: 11, condition: '0<=V R<0 0<=D<=366', coverage: 'F1 T2 F3 F4 F5' },
  { combination: 12, condition: '0<=V R<0 366<D', coverage: 'F1 T2 F3 F4 T5' },
  { combination: 13, condition: '0<=V 0<=R<=1 D<0', coverage: 'F1 F2 F3 T4 F5' },
  { combination: 14, condition: '0<=V 0<=R<=1 0<=D<=366', coverage: 'F1 F2 F3 F4 F5' },
  { combination: 15, condition: '0<=V 0<=R<=1 366<D', coverage: 'F1 F2 F3 F4 T5' },
  { combination: 16, condition: '0<=V 1<R D<0', coverage: 'F1 F2 T3 T4 F5' },
  { combination: 17, condition: '0<=V 1<R 0<=D<=366', coverage: 'F1 F2 T3 F4 F5' },
  { combination: 18, condition: '0<=V 1<R 366<D', coverage: 'F1 F2 T3 F4 T5' },
  { combination: 19, condition: 'V>200 D<=10', coverage: 'T6 T7' },
  { combination: 20, condition: 'V>200 D>10', coverage: 'T6 F7' },
  { combination: 21, condition: 'V<=200 D<=10', coverage: 'F6 T7' },
  { combination: 22, condition: 'V<=200 D>10', coverage: 'F6 F7' },
  { combination: 23, condition: 'R>0.6', coverage: 'T8' },
  { combination: 24, condition: 'R<=0.6', coverage: 'F8' },
  { combination: 25, condition: 'R<=0.85', coverage: 'T9' },
  { combination: 26, condition: 'R>0.85', coverage: 'F9' }
])
</script>

<style scoped>
h2 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 12px;
}
</style>








<script>
export default {
  name: 'Exercise16Solution'
}
</script>



