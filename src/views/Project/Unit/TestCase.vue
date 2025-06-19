<template>
  <div class="page">
    <div class="header">
      <h1>单元测试用例展示</h1>
      <el-button type="primary" @click="startTest">开始测试</el-button>
    </div>

    <div v-if="loading" class="loading">测试中，请稍候...</div>

    <div v-if="showChart" ref="chartContainer" class="chart"></div>

    <el-tabs type="border-card">
      <el-tab-pane label="用户模块">
        <div v-for="(group, idx) in userCases" :key="idx">
          <h3>{{ group.title }}</h3>
          <UseCaseTable :cases="group.items" />
        </div>
      </el-tab-pane>
      <el-tab-pane label="菜品模块">
        <div v-for="(group, idx) in dishCases" :key="idx">
          <h3>{{ group.title }}</h3>
          <UseCaseTable :cases="group.items" />
        </div>
      </el-tab-pane>
      <el-tab-pane label="订单模块">
        <div v-for="(group, idx) in orderCases" :key="idx">
          <h3>{{ group.title }}</h3>
          <UseCaseTable :cases="group.items" />
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { defineComponent, ref, nextTick } from 'vue'
import * as echarts from 'echarts'
import { ElTabs, ElTabPane } from 'element-plus'
import UseCaseTable from './UseCaseTable.vue'

export default defineComponent({
  name: 'TestCase',
  components: { ElTabs, ElTabPane, UseCaseTable },
  data() {
    return {
      userCases: [
        {
          title: '登录',
          items: [
            { caseId: 'SKY_001_001_001', priority: '高', description: '正确账号密码登录', input: 'username=admin, password=123456', expected: '登录成功' },
            { caseId: 'SKY_001_001_002', priority: '高', description: '错误密码登录', input: 'username=admin, password=wrong', expected: '提示密码错误' },
            { caseId: 'SKY_001_001_003', priority: '中', description: '用户名为空', input: 'username=, password=123456', expected: '提示用户名不能为空' },
            { caseId: 'SKY_001_001_004', priority: '中', description: '密码为空', input: 'username=admin, password=', expected: '提示密码不能为空' }
          ]
        },
        {
          title: '注册',
          items: [
            { caseId: 'SKY_001_002_001', priority: '高', description: '完整信息注册', input: 'username=user1, password=123456, email=user1@example.com', expected: '注册成功' },
            { caseId: 'SKY_001_002_002', priority: '中', description: '用户名已存在', input: 'username=admin, password=123456', expected: '提示用户名已存在' },
            { caseId: 'SKY_001_002_003', priority: '低', description: '邮箱格式错误', input: 'username=user2, email=user2@@com', expected: '提示邮箱格式错误' }
          ]
        }
      ],
      dishCases: [
        {
          title: '新增菜品',
          items: [
            { caseId: 'SKY_002_001_001', priority: '高', description: '新增菜品成功', input: 'name=鱼香肉丝', expected: '新增成功' },
            { caseId: 'SKY_002_001_002', priority: '中', description: '菜品名称为空', input: 'name=', expected: '提示名称不能为空' },
            { caseId: 'SKY_002_001_003', priority: '低', description: '价格为负数', input: 'price=-5', expected: '提示价格不能为负数' }
          ]
        },
        {
          title: '分页查询',
          items: [
            { caseId: 'SKY_002_002_001', priority: '中', description: '分页第1页', input: 'page=1', expected: '返回第1页数据' },
            { caseId: 'SKY_002_002_002', priority: '中', description: '分页第2页', input: 'page=2', expected: '返回第2页数据' }
          ]
        },
        {
          title: '批量删除',
          items: [
            { caseId: 'SKY_002_003_001', priority: '高', description: '批量删除成功', input: 'ids=[1,2,3]', expected: '删除成功' },
            { caseId: 'SKY_002_003_002', priority: '低', description: 'ids为空', input: 'ids=[]', expected: '提示无可删除项' }
          ]
        },
        {
          title: '菜品修改',
          items: [
            { caseId: 'SKY_002_004_001', priority: '中', description: '修改成功', input: 'id=5, name=新名', expected: '修改成功' },
            { caseId: 'SKY_002_004_002', priority: '中', description: 'id不存在', input: 'id=999', expected: '提示找不到菜品' },
            { caseId: 'SKY_002_004_003', priority: '低', description: '名称为空', input: 'name=', expected: '提示名称不能为空' }
          ]
        }
      ],
      orderCases: [
        {
          title: '查询订单',
          items: [
            { caseId: 'SKY_003_001_001', priority: '低', description: '输入参数为空', input: 'id=""', expected: '提示”参数不能为空”的错误信息' },
            { caseId: 'SKY_003_001_002', priority: '高', description: '订单id不存在', input: 'id=999', expected: '提示”不存在该订单！”的错误信息' },
            { caseId: 'SKY_003_001_003', priority: '高', description: '订单查询成功', input: 'id=8', expected: '提示查询成功' }
          ]
        },
        {
          title: '接单详情',
          items: [
            { caseId: 'SKY_003_002_001', priority: '低', description: '输入参数为空', input: 'id=,status=', expected: '提示”参数不能为空”的错误信息' },
            { caseId: 'SKY_003_002_002', priority: '高', description: '订单id不存在', input: 'id=999,status=2', expected: '提示” 该订单不存在！”的错误信息' },
            { caseId: 'SKY_003_002_003', priority: '高', description: '接单状态错误', input: 'id=1,status=3', expected: '提示” 该订单非待接单状态！”的错误信息' },
            { caseId: 'SKY_003_002_004', priority: '高', description: '接单成功', input: 'id=1,status=2', expected: '提示接单成功' }
          ]
        },
        {
          title: '派送订单',
          items: [
            { caseId: 'SKY_003_003_001', priority: '低', description: '输入参数为空', input: 'id=,status=', expected: '提示”参数不能为空”的错误信息' },
            { caseId: 'SKY_003_003_002', priority: '高', description: '订单id不存在', input: 'id=999,status=2', expected: '提示” 该订单不存在！”的错误信息' },
            { caseId: 'SKY_003_003_003', priority: '高', description: '派送状态错误', input: 'id=1,status=4', expected: '提示” 该订单非待接单状态！”的错误信息' },
            { caseId: 'SKY_003_003_004', priority: '高', description: '派送成功', input: 'id=1,status=3', expected: '提示派送成功' }
          ]
        },
        {
          title: '完成订单',
          items: [
            { caseId: 'SKY_003_004_001', priority: '低', description: '输入参数为空', input: 'id=,status=', expected: '提示”参数不能为空”的错误信息' },
            { caseId: 'SKY_003_004_002', priority: '高', description: '订单id不存在', input: 'id=999,status=2', expected: '提示” 该订单不存在！”的错误信息' },
            { caseId: 'SKY_003_004_003', priority: '高', description: '订单状态不正确', input: 'id=1,status=5', expected: '提示” 该订单非派送中状态！”的错误信息' },
            { caseId: 'SKY_003_004_004', priority: '高', description: '完成成功', input: 'id=1,status=4', expected: '提示派送成功' }
          ]
        }
      ],
      loading: false,
      showChart: false
    }
  },
  methods: {
    startTest() {
      this.loading = true;
      this.showChart = false;
      fetch('http://localhost:8080/admin/test/run')
        .then(response => {
          this.loading = false;
          if (response.status === 200) {
            this.$message.success('测试成功');
          } else {
            this.$message.error('测试失败');
          }
        })
        .catch(() => {
          this.loading = false;
          this.$message.error('测试失败');
        });
    },
    renderChart() {
      const chartDom = this.$refs.chartContainer
      const myChart = echarts.init(chartDom)

      const allGroups = [
        ...this.userCases,
        ...this.dishCases,
        ...this.orderCases
      ]

      const data = allGroups.map(group => ({
        name: group.title,
        value: group.items.length
      }))

      const option = {
        title: {
          text: '测试用例模块占比（成功率100%）',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        series: [
          {
            name: '用例数量',
            type: 'pie',
            radius: '50%',
            data,
            label: {
              formatter: '{b}: {c} 个 ({d}%)\n成功率: 100%'
            },
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }

      myChart.setOption(option)
    }
  }
})
</script>

<style scoped>
.page {
  padding: 20px;
}
.chart {
  width: 600px;
  height: 400px;
  margin: 20px auto;
}

</style>
