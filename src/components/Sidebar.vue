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
          <!-- 练习模块 -->
          <li>
            <div class="menu-title" @click="toggleMenu('exercise')">
              ▶️ 练习模块
            </div>
            <ul v-show="menuOpen.exercise" class="submenu">
              <li v-for="n in 16" :key="'exercise-' + n">
                <router-link :to="`/exercise/${n}`" class="nav-link">练习{{ n }}</router-link>
              </li>
            </ul>
          </li>

          <!-- 项目模块 -->
          <li>
            <div class="menu-title" @click="toggleMenu('project')">
              ▶️ 项目模块
            </div>
            <ul v-show="menuOpen.project" class="submenu">
              <li><router-link to="/project/unit" class="nav-link">单元测试</router-link></li>
              <li><router-link to="/project/integration" class="nav-link">集成测试</router-link></li>
              <li><router-link to="/project/system" class="nav-link">系统测试</router-link></li>
            </ul>
          </li>

          <li><router-link to="/test" class="nav-link">页面测试</router-link></li>
          
        </ul>
      </nav>
    </transition>
  </div>
</template>


<script>
export default {
  data() {
    return {
      showSidebar: true,
      menuOpen: {
        exercise: true,
        project: true
      }
    }
  },
  methods: {
    toggleSidebar() {
      this.showSidebar = !this.showSidebar
    },
    toggleMenu(section) {
      this.menuOpen[section] = !this.menuOpen[section]
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

.menu-title {
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
  padding: 8px 12px;
  border-radius: 6px;
  color: #1f2937;
  transition: background-color 0.2s;
}

.menu-title:hover {
  background-color: #f3f4f6;
}

.submenu {
  padding-left: 10px;
  margin-top: 8px;
}
</style>
