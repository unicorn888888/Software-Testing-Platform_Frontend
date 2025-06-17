import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
// import Exercise1 from '../views/Exercise/Exercise1.vue'
// import Exercise2 from '../views/Exercise/Exercise2.vue'
// import Exercise3 from '../views/Exercise/Exercise3.vue'
// import Exercise4 from '../views/Exercise/Exercise4.vue'
// import Exercise5 from '../views/Exercise/Exercise5.vue'
// import Exercise6 from '../views/Exercise/Exercise6.vue'
// import Exercise7 from '../views/Exercise/Exercise7.vue'
import Exercise8 from '../views/Exercise/Exercise8.vue'
import Exercise9 from '../views/Exercise/Exercise9.vue'
import Exercise10 from '../views/Exercise/Exercise10.vue'
import Exercise11 from '../views/Exercise/Exercise11.vue'
import Exercise12 from '../views/Exercise/Exercise12.vue'
import Exercise13 from '../views/Exercise/Exercise13.vue'
import Exercise14 from '../views/Exercise/Exercise14.vue'
import Exercise15 from '../views/Exercise/Exercise15.vue'
import Exercise16 from '../views/Exercise/Exercise16.vue'
import Unit from '../views/Project/Unit.vue'
import Integration from '../views/Project/Integration.vue'
import System from '../views/Project/System.vue'
// import test from '../views/Exercise/Test/Exercise1.vue'



const routes = [
  { path: '/', component: Home },
  // { path: '/exercise/1', component: Exercise1 },
  // { path: '/exercise/2', component: Exercise2 },
  // { path: '/exercise/3', component: Exercise3 },
  // { path: '/exercise/4', component: Exercise4 },
  // { path: '/exercise/5', component: Exercise5 },
  // { path: '/exercise/6', component: Exercise6 },
  // { path: '/exercise/7', component: Exercise7 },
  { path: '/exercise/8', component: Exercise8 },
  { path: '/exercise/9', component: Exercise9 },
  { path: '/exercise/10', component: Exercise10 },
  { path: '/exercise/11', component: Exercise11 },
  { path: '/exercise/12', component: Exercise12 },
  { path: '/exercise/13', component: Exercise13 },
  { path: '/exercise/14', component: Exercise14 },
  { path: '/exercise/15', component: Exercise15 },
  { path: '/exercise/16', component: Exercise16 },
  { path: '/project/unit', component: Unit },
  { path: '/project/integration', component: Integration },
  { path: '/project/system', component: System },
  {
    path: '/exercise/1',
    component: () => import('@/views/Exercise/Exercise1/Exercise1.vue'),
    children: [
      {path: 'requirement',component: () => import('@/views/Exercise/Exercise1/Exercise1Requirement.vue')},
      {path: 'solution',component: () => import('@/views/Exercise/Exercise1/Exercise1Solution.vue')},
      {path: 'test',component: () => import('@/views/Exercise/Exercise1/Exercise1Test.vue')},
    ]
  },
  {
    path: '/exercise/2',
    component: () => import('@/views/Exercise/Exercise2/Exercise2.vue'),
    children: [
      {path: 'requirement',component: () => import('@/views/Exercise/Exercise2/Exercise2Requirement.vue')},
      {path: 'solution',component: () => import('@/views/Exercise/Exercise2/Exercise2Solution.vue')},
      {path: 'test',component: () => import('@/views/Exercise/Exercise2/Exercise2Test.vue')},
    ]
  },
  {
    path: '/exercise/3',
    component: () => import('@/views/Exercise/Exercise3/Exercise3.vue'),
    children: [
      {path: 'requirement',component: () => import('@/views/Exercise/Exercise3/Exercise3Requirement.vue')},
      {path: 'solution',component: () => import('@/views/Exercise/Exercise3/Exercise3Solution.vue')}
    ]
  },
  {
    path: '/exercise/4',
    component: () => import('@/views/Exercise/Exercise4/Exercise4.vue'),
    children: [
      {path: 'requirement',component: () => import('@/views/Exercise/Exercise4/Exercise4Requirement.vue')},
      {path: 'solution',component: () => import('@/views/Exercise/Exercise4/Exercise4Solution.vue')},
      {path: 'test',component: () => import('@/views/Exercise/Exercise4/Exercise4Test.vue')},
    ]
  },
  {
    path: '/exercise/5',
    component: () => import('@/views/Exercise/Exercise5/Exercise5.vue'),
    children: [
      {path: 'requirement',component: () => import('@/views/Exercise/Exercise5/Exercise5Requirement.vue')},
      {path: 'solution',component: () => import('@/views/Exercise/Exercise5/Exercise5Solution.vue')}
    ]
  },
  {
    path: '/exercise/6',
    component: () => import('@/views/Exercise/Exercise6/Exercise6.vue'),
    children: [
      {path: 'requirement',component: () => import('@/views/Exercise/Exercise6/Exercise6Requirement.vue')},
      {path: 'solution',component: () => import('@/views/Exercise/Exercise6/Exercise6Solution.vue')}
    ]
  },
  {
    path: '/exercise/7',
    component: () => import('@/views/Exercise/Exercise7/Exercise7.vue'),
    children: [
      {path: 'requirement',component: () => import('@/views/Exercise/Exercise7/Exercise7Requirement.vue')},
      {path: 'solution',component: () => import('@/views/Exercise/Exercise7/Exercise7Solution.vue')},
      {path: 'test',component: () => import('@/views/Exercise/Exercise7/Exercise7Test.vue')},
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
