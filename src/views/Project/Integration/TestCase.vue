<template>
  <div class="page">
    <el-collapse v-model="activeNames" accordion>
      <el-collapse-item
        v-for="(group, index) in testGroups"
        :key="index"
        :name="group.id"
      >
        <template #title>
          <strong>{{ group.name }}</strong> - {{ group.desc }}
        </template>
        <el-table :data="group.cases" style="width: 100%" border>
          <el-table-column prop="id" label="测试编号" width="160" />
          <el-table-column prop="priority" label="优先级" width="80" />
          <el-table-column prop="description" label="测试项描述" />
          <el-table-column prop="input" label="输入" />
          <el-table-column prop="expected" label="期望结果" />
        </el-table>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { ElCollapse, ElCollapseItem, ElTable, ElTableColumn } from 'element-plus'

export default defineComponent({
  name: 'Integration',
  components: {
    ElCollapse,
    ElCollapseItem,
    ElTable,
    ElTableColumn
  },
  data() {
    return {
      activeNames: [],
      testGroups: [
        {
          id: 'SKY_001',
          name: 'category_get',
          desc: '菜品分类查询',
          cases: [
            {
              id: 'SKY_001_001',
              priority: '高',
              description: '分类类型包含在数据库中的情况',
              input: 'type=1',
              expected: '返回包含分类数据的JSON对象'
            },
            {
              id: 'SKY_001_002',
              priority: '高',
              description: '分类类型不包含在数据库中的情况',
              input: 'type=3',
              expected: 'msg="不存在该类型"，data=null'
            }
          ]
        },
        {
          id: 'SKY_002',
          name: 'category_delete',
          desc: '菜品分类删除',
          cases: [
            {
              id: 'SKY_002_001',
              priority: '高',
              description: '菜品分类成功删除',
              input: 'id=11',
              expected: 'code=1, msg=null, data=null'
            },
            {
              id: 'SKY_002_002',
              priority: '高',
              description: '分类ID不存在',
              input: 'id=1',
              expected: 'msg="分类不存在"'
            },
            {
              id: 'SKY_002_003',
              priority: '高',
              description: '分类已关联菜品',
              input: 'id=21',
              expected: 'msg="当前分类关联了菜品,不能删除"'
            },
            {
              id: 'SKY_002_004',
              priority: '高',
              description: '分类已关联套餐',
              input: 'id=15',
              expected: 'msg="当前分类关联了套餐,不能删除"'
            }
          ]
        },
        {
          id: 'SKY_003',
          name: 'setmeal_get',
          desc: '套餐查询',
          cases: [
            {
              id: 'SKY_003_001',
              priority: '高',
              description: '套餐ID存在',
              input: 'id=32',
              expected: '返回套餐明细'
            },
            {
              id: 'SKY_003_002',
              priority: '高',
              description: '套餐ID不存在',
              input: 'id=3',
              expected: 'msg="套餐不存在"'
            }
          ]
        },
        {
          id: 'SKY_004',
          name: 'setmeal_start',
          desc: '套餐起售停售',
          cases: [
            {
              id: 'SKY_004_001',
              priority: '高',
              description: '操作成功',
              input: 'id=32&status=1',
              expected: 'code=1, data=null'
            },
            {
              id: 'SKY_004_002',
              priority: '高',
              description: '套餐不存在',
              input: 'id=3&status=1',
              expected: 'msg="该套餐不存在！"'
            },
            {
              id: 'SKY_004_003',
              priority: '高',
              description: '非法操作',
              input: 'id=32&status=3',
              expected: 'msg="操作非法！"'
            }
          ]
        },
        {
          id: 'SKY_005',
          name: 'dish_get',
          desc: '菜品分页查询',
          cases: [
            {
              id: 'SKY_005_001',
              priority: '高',
              description: '分页参数正确',
              input: 'page=1&pageSize=10',
              expected: '返回分页菜品数据'
            },
            {
              id: 'SKY_005_002',
              priority: '高',
              description: '分页参数错误',
              input: 'page=-1&pageSize=10',
              expected: 'msg="分页参数错误"'
            }
          ]
        },
        {
          id: 'SKY_006',
          name: 'orders_get',
          desc: '订单查询',
          cases: [
            {
              id: 'SKY_006_001',
              priority: '低',
              description: '订单ID存在',
              input: 'id=8',
              expected: '返回订单明细'
            },
            {
              id: 'SKY_006_002',
              priority: '高',
              description: '订单ID不存在',
              input: 'id=1',
              expected: 'msg="不存在该订单！"'
            }
          ]
        },
        {
          id: 'SKY_007',
          name: 'orders_receive',
          desc: '接单',
          cases: [
            {
              id: 'SKY_007_001',
              priority: '高',
              description: '接单成功',
              input: '{"id": 8}',
              expected: 'code=1'
            },
            {
              id: 'SKY_007_002',
              priority: '高',
              description: '非待接单状态',
              input: '{"id": 9}',
              expected: 'msg="该订单非待接单状态！"'
            },
            {
              id: 'SKY_007_003',
              priority: '高',
              description: '订单ID不存在',
              input: '{"id": 333}',
              expected: 'msg="该订单不存在！"'
            }
          ]
        },
        {
          id: 'SKY_008',
          name: 'orders_send',
          desc: '订单派送',
          cases: [
            {
              id: 'SKY_008_001',
              priority: '高',
              description: '派送成功',
              input: 'id=9',
              expected: 'code=1'
            },
            {
              id: 'SKY_008_002',
              priority: '高',
              description: '状态错误',
              input: 'id=8',
              expected: 'msg="订单状态错误"'
            },
            {
              id: 'SKY_008_003',
              priority: '高',
              description: '订单ID不存在',
              input: 'id=11',
              expected: 'msg="不存在该订单！"'
            }
          ]
        },
        {
          id: 'SKY_009',
          name: 'employee_save',
          desc: '员工注册',
          cases: [
            {
              id: 'SKY_009_001',
              priority: '高',
              description: '注册成功',
              input: '{"username": "admin3", ...}',
              expected: 'code=1'
            },
            {
              id: 'SKY_009_002',
              priority: '高',
              description: '用户名已存在',
              input: '{"username": "admin", ...}',
              expected: 'msg="账号已存在"'
            }
          ]
        },
        {
          id: 'SKY_010',
          name: 'employee_login',
          desc: '员工登录',
          cases: [
            {
              id: 'SKY_010_001',
              priority: '高',
              description: '登录成功',
              input: '{"username": "admin2", "password": 123456}',
              expected: '返回token'
            },
            {
              id: 'SKY_010_002',
              priority: '高',
              description: '用户名不存在',
              input: '{"username": "admin34"}',
              expected: 'msg="账号不存在"'
            },
            {
              id: 'SKY_010_003',
              priority: '高',
              description: '密码错误',
              input: '{"username": "admin3", "password": 12345}',
              expected: 'msg="密码错误"'
            }
          ]
        },
        {
          id: 'SKY_011',
          name: 'category_dish_get',
          desc: '分类是否关联菜品',
          cases: [
            {
              id: 'SKY_011_001',
              priority: '高',
              description: '分类ID存在且有关联',
              input: 'categoryId=11',
              expected: 'count > 0'
            },
            {
              id: 'SKY_011_002',
              priority: '高',
              description: '分类ID存在但未关联',
              input: 'categoryId=21',
              expected: 'count = 0'
            },
            {
              id: 'SKY_011_003',
              priority: '高',
              description: '分类ID不存在',
              input: 'categoryId=999',
              expected: 'count = 0'
            }
          ]
        },
        {
          id: 'SKY_012',
          name: 'orders_detail',
          desc: '订单对应菜品/套餐明细',
          cases: [
            {
              id: 'SKY_012_001',
              priority: '高',
              description: '订单ID存在',
              input: 'orderId=8',
              expected: 'orderDetails.isEmpty()==false'
            },
            {
              id: 'SKY_012_002',
              priority: '高',
              description: '订单ID不存在',
              input: 'orderId=999',
              expected: 'orderDetails.isEmpty()==true'
            }
          ]
        },
        {
          id: 'SKY_013',
          name: 'dish_flavor_get',
          desc: '查询菜品口味',
          cases: [
            {
              id: 'SKY_013_001',
              priority: '高',
              description: '菜品ID存在',
              input: 'dishId=57',
              expected: 'flavors.isEmpty()==false'
            },
            {
              id: 'SKY_013_002',
              priority: '高',
              description: '菜品ID不存在',
              input: 'dishId=999',
              expected: 'flavors.isEmpty()==true'
            }
          ]
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
