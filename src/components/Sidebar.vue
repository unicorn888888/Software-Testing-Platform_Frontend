<template>
  <div class="container">
    <button class="toggle-button" @click="toggleSidebar" :aria-label="showSidebar ? '关闭侧边栏' : '打开侧边栏'">
      <span v-if="showSidebar">✕</span>
      <span v-else>☰</span>
    </button>

    <transition name="fade">
      <nav v-if="showSidebar" class="sidebar" role="navigation" aria-label="测试模块导航">
        <h2 class="sidebar-title">测试模块导航</h2>
        <ul>
          <li v-for="n in 12" :key="n">
            <router-link :to="`/page/${n}`" class="nav-link">
              🧪 测试模块 {{ n }}
            </router-link>
          </li>
        </ul>
      </nav>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showSidebar: true
    }
  },
  methods: {
    toggleSidebar() {
      this.showSidebar = !this.showSidebar
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  align-items: flex-start;
  padding: 20px;
  gap: 10px;
}

/* 小巧图标按钮 */
.toggle-button {
  font-size: 24px;
  background: #3b82f6;
  border: none;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;
}

.toggle-button:hover {
  background: #2563eb;
}

.sidebar {
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 220px;
  transition: all 0.3s ease;
}

.sidebar-title {
  font-size: 18px;
  margin-bottom: 15px;
  color: #333;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 5px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  margin-bottom: 12px;
}

.nav-link {
  text-decoration: none;
  color: #374151;
  padding: 8px 12px;
  display: block;
  border-radius: 6px;
  transition: background-color 0.3s, color 0.3s;
}

.nav-link:hover {
  background-color: #f3f4f6;
  color: #111827;
}

/* 动画 */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
