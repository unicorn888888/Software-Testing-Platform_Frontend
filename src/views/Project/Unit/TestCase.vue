<template>
  <div class="page">
    <h1>单元测试用例展示</h1>
    <el-tabs type="border-card">
      <el-tab-pane label="用户模块">
        <UseCaseTable :cases="userCases" />
      </el-tab-pane>
      <el-tab-pane label="菜品模块">
        <UseCaseTable :cases="dishCases" />
      </el-tab-pane>
      <el-tab-pane label="订单模块">
        <UseCaseTable :cases="orderCases" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { ElTabs, ElTabPane } from 'element-plus'
import UseCaseTable from './UseCaseTable.vue'

export default defineComponent({
  name: 'Unit',
  components: {
    ElTabs,
    ElTabPane,
    UseCaseTable
  },
  data() {
    return {
      userCases: [
        {
          module: '用户模块',
          caseId: 'SKY_001_001_001',
          priority: '低',
          description: '输入参数为空',
          input: 'username="", password=""',
          expected: '提示”参数不能为空”的错误信息'
        },
        {
          caseId: 'SKY_001_001_002',
          priority: '高',
          description: '输入账号错误',
          input: 'username="wrong", password="123456"',
          expected: '提示"账号不存在"的错误信息'
        },
        {
          caseId: 'SKY_001_001_003',
          priority: '高',
          description: '输入密码错误',
          input: 'username="admin", password="wrong"',
          expected: '提示"密码错误"的错误信息'
        },
        {
          caseId: 'SKY_001_001_004',
          priority: '高',
          description: '登录成功',
          input: 'username="admin", password="123456"',
          expected: '登录结果，路由至主页'
        },
        {
          caseId: 'SKY_001_002_001',
          priority: '低',
          description: '注册参数为空',
          input: 'username=" ", name=""',
          expected: '提示” 参数不能为空”的错误信息'
        },
        {
          caseId: 'SKY_001_002_002',
          priority: '高',
          description: '注册重复账号',
          input: 'username="admin999", name="已有"',
          expected: '提示” admin999 已存在”的错误信息'
        },
        {
          caseId: 'SKY_001_002_003',
          priority: '高',
          description: '注册成功',
          input: 'username="test", name="测试用户"',
          expected: '提示”注册成功”的信息'
        }
      ],
      dishCases: [
        {
          caseId: 'SKY_002_001_001',
          priority: '低',
          description: '新增菜品参数为空',
          input: 'name="", price=""',
          expected: '提示”参数不能为空”的错误信息'
        },
        {
          caseId: 'SKY_002_001_002',
          priority: '高',
          description: '价格非法',
          input: 'name="测试菜品", price=-1',
          expected: '提示”价格非法”的错误信息'
        },
        {
          caseId: 'SKY_002_001_003',
          priority: '高',
          description: '新增成功',
          input: 'name="测试菜品", price=1000',
          expected: '提示”新增成功”的信息'
        },
        {
          caseId: 'SKY_002_002_001',
          priority: '高',
          description: '分页参数非法',
          input: 'Page=0, PageSize=0',
          expected: '提示”分页参数错误”的错误信息'
        },
        {
          caseId: 'SKY_002_002_002',
          priority: '高',
          description: '分页查询成功',
          input: 'Page=1, PageSize=10',
          expected: '正确查询'
        },
        {
          caseId: 'SKY_002_003_001',
          priority: '高',
          description: '批量删除参数为空',
          input: 'ids=Arrays.asList()',
          expected: '提示” 删除参数为空”的错误信息'
        },
        {
          caseId: 'SKY_002_003_002',
          priority: '高',
          description: '批量删除成功',
          input: 'ids=Arrays.asList(1L,2L)',
          expected: '正确删除'
        },
        {
          caseId: 'SKY_002_004_001',
          priority: '低',
          description: '修改参数为空',
          input: 'name="", price=""',
          expected: '提示”参数不能为空”的错误信息'
        },
        {
          caseId: 'SKY_002_004_002',
          priority: '高',
          description: '修改价格非法',
          input: 'name="更新菜品名称", price=0',
          expected: '提示”价格非法”的错误信息'
        },
        {
          caseId: 'SKY_002_004_003',
          priority: '高',
          description: '修改成功',
          input: 'name="更新菜品名称", price=1000',
          expected: '提示”修改成功”的信息'
        }
      ],
      orderCases: [
        {
          caseId: 'SKY_003_001_001',
          priority: '低',
          description: '查询订单参数为空',
          input: 'id=""',
          expected: '提示”参数不能为空”的错误信息'
        },
        {
          caseId: 'SKY_003_001_002',
          priority: '高',
          description: '订单id不存在',
          input: 'id=999',
          expected: '提示”不存在该订单！”的错误信息'
        },
        {
          caseId: 'SKY_003_001_003',
          priority: '高',
          description: '订单查询成功',
          input: 'id=8',
          expected: '提示查询成功'
        },
        {
          caseId: 'SKY_003_002_003',
          priority: '高',
          description: '接单状态错误',
          input: 'id=1,status=3',
          expected: '提示” 该订单非待接单状态！”的错误信息'
        },
        {
          caseId: 'SKY_003_002_004',
          priority: '高',
          description: '接单成功',
          input: 'id=1,status=2',
          expected: '提示接单成功'
        },
        {
          caseId: 'SKY_003_004_004',
          priority: '高',
          description: '完成订单成功',
          input: 'id=1,status=4',
          expected: '提示派送成功'
        }
      ]
    }
  }
})
</script>

<style scoped>
.page {
  padding: 30px;
}
</style>
