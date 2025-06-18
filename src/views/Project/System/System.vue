<template>
  <div class="page">
    <h1>系统测试</h1>
    <nav class="tab-nav">
      <router-link to="/Project/System/TestStrategy" class="tab" active-class="active">测试策略</router-link>
      <router-link to="/Project/System/TestCase" class="tab" active-class="active">测试用例</router-link>
      <router-link to="/Project/System/TestResults" class="tab" active-class="active">测试结果</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'System'
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
