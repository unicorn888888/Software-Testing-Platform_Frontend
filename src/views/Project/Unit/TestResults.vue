<template>
  <div class="test-results-container">
    <div class="chart-wrapper">
      <Pie :data="chartData" :options="chartOptions" />
    </div>
    <div class="images">
      <img src="@/assets/test-result-1.png" alt="Test Result 1" class="image" />
      <img src="@/assets/test-result-2.png" alt="Test Result 2" class="image" />
    </div>
  </div>
</template>

<script>
import { Pie } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement)

export default {
  components: {
    Pie
  },
  data() {
    return {
      chartData: {
        labels: [
          '登录',
          '注册',
          '新增菜品',
          '分页查询',
          '批量删除',
          '菜品修改',
          '查询订单',
          '接单详情',
          '派送订单',
          '完成订单'
        ],
        datasets: [
          {
            label: '测试用例贡献率',
            data: [4, 3, 3, 2, 2, 3,3,4,4,4],
            backgroundColor: [
        'rgba(75, 192, 192, 0.5)',  // 1
        'rgba(255, 206, 86, 0.5)',  // 2
        'rgba(255, 99, 132, 0.5)',  // 3
        'rgba(54, 162, 235, 0.5)',  // 4
        'rgba(153, 102, 255, 0.5)', // 5
        'rgba(255, 159, 64, 0.5)',  // 6
        'rgba(201, 203, 207, 0.5)', // 7 
        'rgba(255, 99, 71, 0.5)',   // 
        'rgba(60, 179, 113, 0.5)',  // 
        'rgba(238, 130, 238, 0.5)'  //
      ],
      borderColor: [
        'rgba(75, 192, 192, 1)',  
        'rgba(255, 206, 86, 1)',  
        'rgba(255, 99, 132, 1)',  
        'rgba(54, 162, 235, 1)',  
        'rgba(153, 102, 255, 1)', 
        'rgba(255, 159, 64, 1)',  
        'rgba(201, 203, 207, 1)', 
        'rgba(255, 99, 71, 1)',   
        'rgba(60, 179, 113, 1)',  
        'rgba(238, 130, 238, 1)'  
      ],
            borderWidth: 1
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
            labels: {
              font: {
                size: 14
              }
            }
          },
          title: {
            display: true,
            text: '各模块测试用例贡献率与成功率',
            font: {
              size: 18
            },
            padding: {
              top: 10,
              bottom: 30
            }
          },
          tooltip: {
            callbacks: {
              label(context) {
                const label = context.label || ''
                const value = context.raw
                const total = context.dataset.data.reduce((a, b) => a + b, 0)
                const percent = ((value / total) * 100).toFixed(2)
                return `${label}: ${value} 个测试 (${percent}%) - 成功率: 100%`
              }
            }
          }
        }
      }
    }
  }
}
</script>

<style scoped>
.test-results-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.chart-wrapper {
  width: 80%;
  height: 400px;
  position: relative;
  margin-bottom: 20px;
}

.images {
  display: flex;
  justify-content: space-around;
  width: 100%;
}

.image {
  max-width: 45%;
  height: auto;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
