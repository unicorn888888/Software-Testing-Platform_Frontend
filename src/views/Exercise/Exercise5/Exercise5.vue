<template>
  <div class="page">
    <h1>练习5-电商平台系统边界值</h1>
    <nav class="tab-nav">
      <router-link to="/exercise/5/requirement" class="tab" active-class="active">作业要求</router-link>
      <router-link to="/exercise/5/solution" class="tab" active-class="active">解题过程</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Exercise5'
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
