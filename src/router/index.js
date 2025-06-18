import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
//import Unit from '../views/Project/Unit/Unit.vue'
//import Integration from '../views/Project/Integration/Integration.vue'
//import System from '../views/Project/System/System.vue'
// import test from '../views/Exercise/Test/Exercise1.vue'



const routes = [
  { path: '/', component: Home },
  {
    path: '/Project/Unit',
    component: () => import('@/views/Project/Unit/Unit.vue'),
    children: [
      {path: 'TestStrategy',component: () => import('@/views/Project/Unit/TestStrategy.vue')},
      {path: 'TestCase',component: () => import('@/views/Project/Unit/TestCase.vue')},
      {path: 'TestResults',component: () => import('@/views/Project/Unit/TestResults.vue')},
    ]
   },
   {
    path: '/Project/Integration',
    component: () => import('@/views/Project/Integration/Integration.vue'),
    children: [
      {path: 'TestStrategy',component: () => import('@/views/Project/Integration/TestStrategy.vue')},
      {path: 'TestCase',component: () => import('@/views/Project/Integration/TestCase.vue')},
      {path: 'TestResults',component: () => import('@/views/Project/Integration/TestResults.vue')},
    ]
   },
   {
    path: '/Project/system',
    component: () => import('@/views/Project/system/system.vue'),
    children: [
      {path: 'TestStrategy',component: () => import('@/views/Project/system/TestStrategy.vue')},
      {path: 'TestCase',component: () => import('@/views/Project/system/TestCase.vue')},
      {path: 'TestResults',component: () => import('@/views/Project/system/TestResults.vue')},
    ]
   },
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
      {path: 'test1',component: () => import('@/views/Exercise/Exercise7/Exercise7Test1.vue')},
      {path: 'test2',component: () => import('@/views/Exercise/Exercise7/Exercise7Test2.vue')},
      {path: 'test3',component: () => import('@/views/Exercise/Exercise7/Exercise7Test3.vue')},
    ]
  },
  {
    path: '/exercise/8',
    component: () => import('@/views/Exercise/Exercise8/Exercise8.vue'),
    children: [
      {path: 'requirement',component: () => import('@/views/Exercise/Exercise8/Exercise8Requirement.vue')},
      {path: 'solution',component: () => import('@/views/Exercise/Exercise8/Exercise8Solution.vue')}
    ]
  },
  {
    path: '/exercise/9',
    component: () => import('@/views/Exercise/Exercise9/Exercise9.vue'),
    children: [
      {path: 'requirement',component: () => import('@/views/Exercise/Exercise9/Exercise9Requirement.vue')},
      {path: 'solution',component: () => import('@/views/Exercise/Exercise9/Exercise9Solution.vue')},
      {path: 'test',component: () => import('@/views/Exercise/Exercise9/Exercise9Test.vue')},
    ]
  },
  {
    path: '/exercise/10',
    component: () => import('@/views/Exercise/Exercise10/Exercise10.vue'),
    children: [
      {path: 'requirement',component: () => import('@/views/Exercise/Exercise10/Exercise10Requirement.vue')},
      {path: 'solution',component: () => import('@/views/Exercise/Exercise10/Exercise10Solution.vue')},
      {path: 'test',component: () => import('@/views/Exercise/Exercise10/Exercise10Test.vue')},
    ]
  },
  {
    path: '/exercise/11',
    component: () => import('@/views/Exercise/Exercise11/Exercise11.vue'),
    children: [
      {path: 'requirement',component: () => import('@/views/Exercise/Exercise11/Exercise11Requirement.vue')},
      {path: 'solution',component: () => import('@/views/Exercise/Exercise11/Exercise11Solution.vue')},
      {path: 'test',component: () => import('@/views/Exercise/Exercise11/Exercise11Test.vue')},
    ]
  },
  {
    path: '/exercise/12',
    component: () => import('@/views/Exercise/Exercise12/Exercise12.vue'),
    children: [
      {path: 'requirement',component: () => import('@/views/Exercise/Exercise12/Exercise12Requirement.vue')},
      {path: 'solution',component: () => import('@/views/Exercise/Exercise12/Exercise12Solution.vue')}
    ]
  },
  {
    path: '/exercise/13',
    component: () => import('@/views/Exercise/Exercise13/Exercise13.vue'),
    children: [
      {path: 'requirement',component: () => import('@/views/Exercise/Exercise13/Exercise13Requirement.vue')},
      {path: 'solution',component: () => import('@/views/Exercise/Exercise13/Exercise13Solution.vue')}
    ]
  },
  {
    path: '/exercise/14',
    component: () => import('@/views/Exercise/Exercise14/Exercise14.vue'),
    children: [
      {path: 'requirement',component: () => import('@/views/Exercise/Exercise14/Exercise14Requirement.vue')},
      {path: 'solution',component: () => import('@/views/Exercise/Exercise14/Exercise14Solution.vue')}
    ]
  },
  {
    path: '/exercise/15',
    component: () => import('@/views/Exercise/Exercise15/Exercise15.vue'),
    children: [
      {path: 'requirement',component: () => import('@/views/Exercise/Exercise15/Exercise15Requirement.vue')},
      {path: 'solution',component: () => import('@/views/Exercise/Exercise15/Exercise15Solution.vue')}
    ]
  },
  {
    path: '/exercise/16',
    component: () => import('@/views/Exercise/Exercise16/Exercise16.vue'),
    children: [
      {path: 'requirement',component: () => import('@/views/Exercise/Exercise16/Exercise16Requirement.vue')},
      {path: 'solution',component: () => import('@/views/Exercise/Exercise16/Exercise16Solution.vue')},
      {path: 'test',component: () => import('@/views/Exercise/Exercise16/Exercise16Test.vue')},
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
