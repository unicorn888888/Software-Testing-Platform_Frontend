<template>
  <div class="page">
    <h1>静态测试</h1>

    <!-- 新增的图片展示区 -->
    <div class="static-test-section">
      <p class="image-title">静态测试结果如下</p>
      <img src="@/assets/s1.png" alt="静态测试结果" class="result-image" />
    </div>

    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Integration'
}
</script>

<style scoped>
.page {
  padding: 20px;
}

.static-test-section {
  margin: 30px 0;
  text-align: center;
}

.image-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 12px;
}

.result-image {
  max-width: 100%;
  height: auto;
  border: 1px solid #ccc;
  border-radius: 8px;
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
