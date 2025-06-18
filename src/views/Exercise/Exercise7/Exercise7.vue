<template>
  <div class="page">
    <h1>练习7-电信收费问题</h1>
    <nav class="tab-nav">
      <router-link to="/exercise/7/requirement" class="tab" active-class="active">作业要求</router-link>
      <router-link to="/exercise/7/solution" class="tab" active-class="active">解题过程</router-link>
      <router-link to="/exercise/7/test1" class="tab" active-class="active">边界值测试用例</router-link>
      <router-link to="/exercise/7/test2" class="tab" active-class="active">等价类测试用例</router-link>
      <router-link to="/exercise/7/test3" class="tab" active-class="active">决策表测试用例</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Exercise7'
}
</script>

<style scoped>
.page {
  padding: 20px;
}
.tab-nav {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
.tab {
  padding: 6px 12px;
  background-color: #f3f4f6;
  border-radius: 6px;
  text-decoration: none;
  color: #374151;
}
.active {
  background-color: #2563eb;
  color: white;
}
</style>
