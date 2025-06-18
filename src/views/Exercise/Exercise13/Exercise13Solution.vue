<template>
  <div class="equivalency-classes">
      <h2>关系图</h2>
      <img src="@/assets/13-2.png" alt="13-2">
      <!-- 流分析表格 -->
      <div>
        <h2 class="text-xl font-bold mb-2">流分析</h2>
        <el-table :data="flows" border style="width: 100%">
          <el-table-column prop="type" label="类型" width="100" />
          <el-table-column prop="content" label="内容" />
        </el-table>
      </div>

      <!-- 设计场景表格 -->
      <div>
        <h2 class="text-xl font-bold mb-2">设计场景</h2>
        <el-table :data="scenarios" border style="width: 100%">
          <el-table-column prop="id" label="编号" width="80" />
          <el-table-column prop="scene" label="场景" width="300" />
          <el-table-column prop="relatedFlows" label="对应的流" />
        </el-table>
      </div>

      <div>
        <h2 class="text-xl font-bold mb-2">用例分析</h2>
        <el-table :data="cases" border style="width: 100%">
          <el-table-column prop="id" label="用例ID" width="80" />
          <el-table-column prop="scene" label="场景" width="300" />
          <el-table-column prop="inventoryMeetsSales" label="可用库存是否满足销售需求" width="180" />
          <el-table-column prop="hasInventory" label="是否有可用库存" width="140" />
          <el-table-column prop="inventoryMeetsProduction" label="可用库存是否满足生产需求" width="200" />
          <el-table-column prop="productionQC" label="生产质检是否合格" width="160" />
          <el-table-column prop="purchaseQC" label="采购质检是否合格" width="160" />
          <el-table-column prop="shipmentDone" label="货是否发完" width="120" />
          <el-table-column prop="expectedResult" label="预期结果" />
        </el-table>
      </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 流分析数据
const flows = ref([
  { type: '基本流', content: '销售合同 -> 计划需求 -> MPS计算 -> 可用库存满足销售需求 -> 销售发货管理 -> 发完货 -> 合同结案' },
  { type: '备选流1', content: '可用库存不满足销售需求 -> 有可用库存 -> 主生产计划 -> MRP计算 -> 可用库存满足生产需求 -> 计划生产订单 -> 车间作业计划 -> 生产工序管理 -> 完工处理、工序转移 -> 生产质检 -> 合格 -> 生产入库 -> 销售发货管理' },
  { type: '备选流2', content: '无可用库存 -> 主生产计划 -> MRP计算 -> 可用库存满足生产需求 -> 计划生产订单 -> 车间作业计划 -> 生产工序管理 -> 完工处理、工序转移 -> 生产质检 -> 合格 -> 生产入库 -> 销售发货管理' },
  { type: '备选流3', content: '可用库存不满足生产需求 -> 计划生产订单 -> 计划请购单 -> 计划采购清单 -> 采购订单 -> 采购到货处理 -> 采购质检 -> 合格 -> 采购入库 -> 计划生产订单' },
  { type: '备选流4', content: '生产质检 -> 不合格 -> 返工 -> 返工计划 -> 生产工序管理' },
  { type: '备选流5', content: '生产质检 -> 不合格 -> 废品 -> 计划需求' },
  { type: '备选流6', content: '采购质检 -> 不合格 -> 采购退货单 -> 计划采购订单' },
  { type: '备选流7', content: '销售发货管理 -> 货未发完 -> 销售发货管理' }
])

// 设计场景数据
const scenarios = ref([
  { id: 1, scene: '合同成功结案', relatedFlows: '基本流' },
  { id: 2, scene: '可用库存不满足销售需求，有可用库存', relatedFlows: '基本流，备选流1' },
  { id: 3, scene: '可用库存不满足销售需求，无可用库存', relatedFlows: '基本流，备选流1，备选流2' },
  { id: 4, scene: '可用库存不满足销售需求，可用库存不满足生产需求，采购合格', relatedFlows: '基本流，备选流1，备选流3' },
  { id: 5, scene: '可用库存不满足销售需求，可用库存不满足生产需求，采购不合格', relatedFlows: '基本流，备选流1，备选流3，备选流6' },
  { id: 6, scene: '可用库存不满足销售需求，生产不合格', relatedFlows: '基本流，备选流1，备选流4' },
  { id: 7, scene: '可用库存不满足销售需求，生产出废品', relatedFlows: '基本流，备选流1，备选流5' },
  { id: 8, scene: '货未发完', relatedFlows: '基本流，备选流7' }
])

const cases = ref([
  {
    id: 1,
    scene: '合同成功结案',
    inventoryMeetsSales: 'V',
    hasInventory: 'n/a',
    inventoryMeetsProduction: 'n/a',
    productionQC: 'n/a',
    purchaseQC: 'n/a',
    shipmentDone: 'V',
    expectedResult: '合同结案，流结束'
  },
  {
    id: 2,
    scene: '可用库存不满足销售需求，有可用库存',
    inventoryMeetsSales: 'I',
    hasInventory: 'V',
    inventoryMeetsProduction: 'V',
    productionQC: 'V',
    purchaseQC: 'n/a',
    shipmentDone: 'V',
    expectedResult: '到达基本流第五步销售发货管理'
  },
  {
    id: 3,
    scene: '可用库存不满足销售需求，无可用库存',
    inventoryMeetsSales: 'I',
    hasInventory: 'I',
    inventoryMeetsProduction: 'V',
    productionQC: 'V',
    purchaseQC: 'n/a',
    shipmentDone: 'V',
    expectedResult: '到达基本流第五步销售发货管理'
  },
  {
    id: 4,
    scene: '可用库存不满足销售需求，可用库存不满足生产需求，采购合格',
    inventoryMeetsSales: 'I',
    hasInventory: 'V',
    inventoryMeetsProduction: 'I',
    productionQC: 'V',
    purchaseQC: 'V',
    shipmentDone: 'V',
    expectedResult: '完成采购部分，到达计划生产订单'
  },
  {
    id: 5,
    scene: '可用库存不满足销售需求，可用库存不满足生产需求，采购不合格',
    inventoryMeetsSales: 'I',
    hasInventory: 'V',
    inventoryMeetsProduction: 'I',
    productionQC: 'V',
    purchaseQC: 'I',
    shipmentDone: 'V',
    expectedResult: '采购退货单，返回计划采购订单'
  },
  {
    id: 6,
    scene: '可用库存不满足销售需求，生产不合格',
    inventoryMeetsSales: 'I',
    hasInventory: 'V',
    inventoryMeetsProduction: 'V',
    productionQC: 'I 不合格',
    purchaseQC: 'n/a',
    shipmentDone: 'V',
    expectedResult: '返工，最后返回生产工序管理'
  },
  {
    id: 7,
    scene: '可用库存不满足销售需求，生产出废品',
    inventoryMeetsSales: 'I',
    hasInventory: 'V',
    inventoryMeetsProduction: 'V',
    productionQC: 'I 废品',
    purchaseQC: 'n/a',
    shipmentDone: 'V',
    expectedResult: '产生废品，返回基本流第二步计划需求'
  },
  {
    id: 8,
    scene: '货未发完',
    inventoryMeetsSales: 'V',
    hasInventory: 'n/a',
    inventoryMeetsProduction: 'n/a',
    productionQC: 'n/a',
    purchaseQC: 'n/a',
    shipmentDone: 'I',
    expectedResult: '返回基本流第五步销售发货管理'
  }
])
</script>

<script>
export default {
  name: 'Exercise13Solution'
}
</script>



