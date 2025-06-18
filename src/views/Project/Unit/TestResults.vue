<template>
  <div class="test-results-container">
    <div class="chart-container">
      <Pie :data="chartData" :options="chartOptions" />
    </div>
    <div class="images">
      <img src="@/assets/test-result-1.png" alt="Test Result 1" class="image" />
      <img src="@/assets/test-result-2.png" alt="Test Result 2" class="image" />
    </div>
  </div>
</template>

<script>
import { Pie } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

export default {
  components: {
    Pie,
  },
  data() {
    return {
      chartData: {
        labels: [
          'OrderControllerTest',
          'DishControllerTest',
          'EmployeeControllerTest',
          'CategoryServiceImplTest',
          'DishServiceImplTest',
          'OrderServiceImplTest'
        ],
        datasets: [
          {
            label: '测试用例贡献率',
            data: [15, 10, 7, 3, 2, 2],
            backgroundColor: [
              'rgba(75, 192, 192, 0.5)',
              'rgba(255, 206, 86, 0.5)',
              'rgba(255, 99, 132, 0.5)',
              'rgba(54, 162, 235, 0.5)',
              'rgba(153, 102, 255, 0.5)',
              'rgba(255, 159, 64, 0.5)',
            ],
            borderColor: [
              'rgba(75, 192, 192, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top'
          },
          title: {
            display: true,
            text: '各模块测试用例贡献率（成功率均为100%）'
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                const label = context.label || '';
                const value = context.raw;
                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                const percent = ((value / total) * 100).toFixed(2);
                return `${label}: ${value} 个测试 (${percent}%) - 成功率: 100%`;
              }
            }
          }
        }
      }
    };
  }
};
</script>

<style scoped>
.test-results-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.chart-container {
  width: 80%;
  height: 400px;
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
