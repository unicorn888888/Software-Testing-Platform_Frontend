import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Page01 from '../views/Page01.vue'
import Page02 from '../views/Page02.vue'
import Page03 from '../views/Page03.vue'
import Page04 from '../views/Page04.vue'
import Page05 from '../views/Page05.vue'
import Page06 from '../views/Page06.vue'
import Page07 from '../views/Page07.vue'
import Page08 from '../views/Page08.vue'
import Page09 from '../views/Page09.vue'
import Page10 from '../views/Page10.vue'
import Page11 from '../views/Page11.vue'
import Page12 from '../views/Page12.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/page/1', component: Page01 },
  { path: '/page/2', component: Page02 },
  { path: '/page/3', component: Page03 },
  { path: '/page/4', component: Page04 },
  { path: '/page/5', component: Page05 },
  { path: '/page/6', component: Page06 },
  { path: '/page/7', component: Page07 },
  { path: '/page/8', component: Page08 },
  { path: '/page/9', component: Page09 },
  { path: '/page/10', component: Page10 },
  { path: '/page/11', component: Page11 },
  { path: '/page/12', component: Page12 }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
