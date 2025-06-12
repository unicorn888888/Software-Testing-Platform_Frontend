<template>
  <div class="home">
    <h1 class="title">软件测试可视化平台</h1>
    <router-link to="/page/1">
      <button class="start-button" aria-label="开始测试">开始测试</button>
    </router-link>
    <p class="subtitle">欢迎使用本平台，点击按钮开始您的测试之旅！</p>
  </div>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 0 20px;
  box-sizing: border-box;
  text-align: center;
}

.title {
  font-size: 3rem;
  margin-bottom: 30px;
  font-weight: 700;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
}

.start-button {
  background-color: #ff6363;
  border: none;
  border-radius: 50px;
  padding: 15px 40px;
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
  cursor: pointer;
  box-shadow: 0 8px 15px rgba(255, 99, 99, 0.4);
  transition: all 0.3s ease;
}

.start-button:hover {
  background-color: #ff3b3b;
  box-shadow: 0 12px 20px rgba(255, 59, 59, 0.6);
  transform: translateY(-3px);
}

.subtitle {
  margin-top: 20px;
  font-size: 1.1rem;
  font-weight: 400;
  opacity: 0.85;
  max-width: 400px;
  user-select: none;
}
</style>
