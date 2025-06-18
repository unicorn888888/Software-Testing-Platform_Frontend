<template>
  <div class="equivalency-classes">
    <h2>日期输入字段的等价类划分</h2>
    <div
      v-for="(variable, index) in variables"
      :key="index"
      class="variable-section"
    >
      <h2>{{ variable.name }}</h2>
      <el-table :data="combineClasses(variable)" border style="width: 100%">
        <el-table-column prop="id" label="等价类编号" width="120" />
        <el-table-column prop="value" label="等价类描述" />
      </el-table>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const variables = ref([
  {
    name: '年份（year）',
    validClasses: [
      { id: 'E1', value: '1900 ≤ year ≤ 2100' },
    ],
    invalidClasses: [
      { id: 'I1', value: 'year < 1900' },
      { id: 'I2', value: 'year > 2100' },
    ],
  },
  {
    name: '月份（month）',
    validClasses: [
      { id: 'E2', value: '1 ≤ month ≤ 12' },
    ],
    invalidClasses: [
      { id: 'I3', value: 'month < 1（负值或0）' },
      { id: 'I4', value: 'month > 12' },
    ],
  },
  {
    name: '日期（day）',
    validClasses: [
      { id: 'E3.1', value: '1~31（用于1、3、5、7、8、10、12月）' },
      { id: 'E3.2', value: '1~30（用于4、6、9、11月）' },
      { id: 'E3.3', value: '1~28（用于2月，普通年）' },
      { id: 'E3.4', value: '1~29（用于2月，闰年）' },
    ],
    invalidClasses: [
      { id: 'I5', value: 'day < 1' },
      { id: 'I6', value: 'day > 最大天数（如4月有31天、2月有30天、闰年判断错误等）' },
    ],
  },
]);

function combineClasses(variable) {
  const validRows = variable.validClasses.map((cls) => ({
    ...cls,
    valid: true,
  }));

  const invalidRows = variable.invalidClasses.map((cls) => ({
    ...cls,
    valid: false,
  }));

  return [...validRows, ...invalidRows];
}
</script>


<script>
export default {
  name: 'Exercise10Solution'
}
</script>



