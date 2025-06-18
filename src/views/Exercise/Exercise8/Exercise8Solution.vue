<template>
  <div class="equivalency-classes">
    <h1>等价类划分</h1>
    <div
      v-for="(variable, index) in variables"
      :key="index"
      class="variable-section"
    >
      <h2>{{ variable.name }}</h2>
      <el-table :data="combineClasses(variable)" border style="width: 100%">
        <el-table-column prop="id" label="等价类编号" width="150" />
        <el-table-column prop="value" label="等价类内容" />
      </el-table>
    </div>
    <p>强一般等价类的个数为 10×1×4×1×2×1×1 = 80 个。</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const variables = ref([
  {
    name: '变量 A',
    validClasses: [
      { id: 'A1', value: '{ 0000 }' },
      { id: 'A2', value: '{ 0001 }' },
      { id: 'A3', value: '{ 0010 }' },
      { id: 'A4', value: '{ 0011 }' },
      { id: 'A5', value: '{ 0100 }' },
      { id: 'A6', value: '{ 0101 }' },
      { id: 'A7', value: '{ 0110 }' },
      { id: 'A8', value: '{ 0111 }' },
      { id: 'A9', value: '{ 1000 }' },
      { id: 'A10', value: '{ 1001 }' },
    ],
    invalidClasses: ['{ 1010, 1011, 1100, 1101, 1110, 1111 }'],
  },
  {
    name: '变量 B',
    validClasses: [
      { id: 'B1', value: '{ 0<=B<2^64 }' },
    ],
    invalidClasses: ['{ B>=2^64 }'],
  },
  {
    name: '变量 C',
    validClasses: [
      { id: 'C1', value: '{ "现金查询" }' },
      { id: 'C2', value: '{ "支票查询" }' },
      { id: 'C3', value: '{ "存款" }' },
      { id: 'C4', value: '{ "取款" }' },
    ],
    invalidClasses: ['{ C ∉ { "现金查询","支票查询","存款","取款" }'],
  },
  {
    name: '变量 D',
    validClasses: [
      { id: 'D1', value: '{ 100<=D<=999 }' },
    ],
    invalidClasses: [
      '{ 0 <= D < 100 }',
      '{ D > 999 }',
    ],
  },
  {
    name: '变量 E',
    validClasses: [
      { id: 'E1', value: '{ 200 <= E <= 500 }' },
      { id: 'E2', value: '{ 600 <= E <= 900 }' },
    ],
    invalidClasses: [
      '{ 0 <= E < 200 }',
      '{ 500 < E < 600 }',
      '{ 900 < E }',
    ],
  },
  {
    name: '变量 F',
    validClasses: [
      { id: 'F1', value: '{ F是六位字符串 }' },
    ],
    invalidClasses: ['{ F不是六位字符串 }'],
  },
  {
    name: '变量 G',
    validClasses: [
      { id: 'G1', value: '{ G是256位二进制数 }' },
    ],
    invalidClasses: ['{ G不是256位二进制数 }'],
  },
]);

function combineClasses(variable) {
  const validRows = variable.validClasses.map((cls) => ({
    id: cls.id,
    value: cls.value,
    valid: true,
  }));

  const invalidRows = variable.invalidClasses.map((val, idx) => ({
    id: `无效等价类-${idx + 1}`,
    value: val,
    valid: false,
  }));

  return [...validRows, ...invalidRows];
}
</script>


<script>
export default {
  name: 'Exercise8Solution'
}
</script>



