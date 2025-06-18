<template>
  <el-table :data="cases" style="width: 100%" border>
    <el-table-column prop="caseId" label="测试编号" width="160" />
    <el-table-column prop="priority" label="优先级" width="80" />
    <el-table-column prop="description" label="测试描述" />
    <el-table-column prop="input" label="输入" width="280" />
    <el-table-column prop="expected" label="期望结果" />
  </el-table>
</template>

<script>
export default {
  name: 'UseCaseTable',
  props: {
    cases: Array
  }
}
</script>

<style scoped>
.el-table {
  font-size: 14px;
}
</style>
