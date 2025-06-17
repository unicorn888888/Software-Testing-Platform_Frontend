<template>
  <div class="boundary-value-analysis">

      <h2>边界值分析</h2>

      <h3>时间分度边界值</h3>
      <p><strong>实时数据展示：</strong>
          秒、分、时、日、月、年等时间分度的最小值和最大值。
          例如秒的最小值为1秒，最大值假设为60秒；分钟1~60；小时1~24；日1~31（或具体月份）；月1~12；年1~系统运行年数。
      </p>
      <p><strong>历史数据查询：</strong>
          上一分钟、上一小时、上一天等时间分度的边界值。
          例如上一分钟最小为当前时间减1分钟，最大为当前时间减60分钟；上一小时最小为当前时间减1小时，最大为减24小时；上一天最小为当前时间减1天，最大为减31天（或具体月份）。
      </p>

      <h3>数据阈值边界值</h3>
      <p><strong>实时数据阈值：</strong>用户设置的临时阈值，最小值为传感器可测量的最小值，最大值为传感器可测量的最大值。
      </p>
      <p><strong>异常数据阈值：</strong>系统检测异常数据时使用的阈值，最小值和最大值取决于传感器测量范围和系统设计要求。
      </p>

      <h3>数据量边界值</h3>
      <p><strong>实时数据量：</strong>系统能处理的最大数据量，例如最多同时展示10个传感器，每个传感器最多1000个数据点。
      </p>
      <p><strong>历史数据量：</strong>系统查询时返回的最大数据量，例如最多返回10000个数据点。
      </p>

      <h3>用户权限边界值</h3>
      <p><strong>用户角色权限：</strong>不同用户角色权限边界，如建筑管理者可查看所有数据和系统设置，建筑租户只能查看自身相关信息。
      </p>
      <p><strong>用户操作权限：</strong>不同操作权限，如只有管理员能生成历史异常数据报告。
      </p>

      <h2>测试用例设计</h2>
      <h3>时间分度测试用例</h3>
      <el-table :data="timeDivisionCases" border stripe size="small" style="margin-bottom: 24px;">
        <el-table-column prop="id" label="用例编号" width="100" />
        <el-table-column prop="scene" label="测试场景" />
        <el-table-column prop="input" label="输入数据" />
        <el-table-column prop="expected" label="预期结果" />
      </el-table>

      <h3>数据阈值测试用例</h3>
      <el-table :data="thresholdCases" border stripe size="small" style="margin-bottom: 24px;">
        <el-table-column prop="id" label="用例编号" width="100" />
        <el-table-column prop="scene" label="测试场景" />
        <el-table-column prop="input" label="输入数据" />
        <el-table-column prop="expected" label="预期结果" />
      </el-table>

      <h3>数据量测试用例</h3>
      <el-table :data="dataVolumeCases" border stripe size="small" style="margin-bottom: 24px;">
        <el-table-column prop="id" label="用例编号" width="100" />
        <el-table-column prop="scene" label="测试场景" />
        <el-table-column prop="input" label="输入数据" />
        <el-table-column prop="expected" label="预期结果" />
      </el-table>

      <h3>用户权限测试用例</h3>
      <el-table :data="userPermissionCases" border stripe size="small">
        <el-table-column prop="id" label="用例编号" width="100" />
        <el-table-column prop="scene" label="测试场景" />
        <el-table-column prop="input" label="输入数据" />
        <el-table-column prop="expected" label="预期结果" />
      </el-table>
    <!-- </el-card> -->
  </div>
</template>

<script setup>
import { ref } from "vue";

const timeDivisionCases = ref([
  { id: "TC01", scene: "实时数据展示，时间分度为秒，最小值", input: "时间分度=1秒", expected: "系统正常展示实时数据，数据更新频率为每秒一次" },
  { id: "TC02", scene: "实时数据展示，时间分度为秒，最大值", input: "时间分度=60秒", expected: "系统正常展示实时数据，数据更新频率为每60秒一次" },
  { id: "TC03", scene: "实时数据展示，时间分度为分钟，最小值", input: "时间分度=1分钟", expected: "系统正常展示实时数据，数据更新频率为每分钟一次" },
  { id: "TC04", scene: "实时数据展示，时间分度为分钟，最大值", input: "时间分度=60分钟", expected: "系统正常展示实时数据，数据更新频率为每60分钟一次" },
  { id: "TC05", scene: "实时数据展示，时间分度为小时，最小值", input: "时间分度=1小时", expected: "系统正常展示实时数据，数据更新频率为每小时一次" },
  { id: "TC06", scene: "实时数据展示，时间分度为小时，最大值", input: "时间分度=24小时", expected: "系统正常展示实时数据，数据更新频率为每24小时一次" },
  { id: "TC07", scene: "历史数据查询，上一分钟，最小值", input: "时间分度=上一分钟", expected: "系统正常返回上一分钟的历史数据" },
  { id: "TC08", scene: "历史数据查询，上一分钟，最大值", input: "时间分度=上60分钟", expected: "系统正常返回上60分钟的历史数据" },
  { id: "TC09", scene: "历史数据查询，上一小时，最小值", input: "时间分度=上一小时", expected: "系统正常返回上一小时的历史数据" },
  { id: "TC10", scene: "历史数据查询，上一小时，最大值", input: "时间分度=上24小时", expected: "系统正常返回上24小时的历史数据" },
]);

const thresholdCases = ref([
  { id: "TC11", scene: "实时数据展示，设置临时阈值，最小值", input: "临时阈值=传感器可测量的最小值", expected: "系统正常展示实时数据，并根据阈值进行数据标注" },
  { id: "TC12", scene: "实时数据展示，设置临时阈值，最大值", input: "临时阈值=传感器可测量的最大值", expected: "系统正常展示实时数据，并根据阈值进行数据标注" },
  { id: "TC13", scene: "异常数据检测，峰值阈值，最小值", input: "峰值阈值=传感器可测量的最小值", expected: "系统正常检测异常数据，并将超过阈值的数据标记为异常" },
  { id: "TC14", scene: "异常数据检测，峰值阈值，最大值", input: "峰值阈值=传感器可测量的最大值", expected: "系统正常检测异常数据，并将超过阈值的数据标记为异常" },
]);

const dataVolumeCases = ref([
  { id: "TC15", scene: "实时数据展示，同时展示最大传感器数量", input: "同时展示10个传感器的数据", expected: "系统正常展示实时数据，数据展示准确无误" },
  { id: "TC16", scene: "实时数据展示，每个传感器最大数据点数量", input: "每个传感器的数据点数量=1000个", expected: "系统正常展示实时数据，数据展示准确无误" },
  { id: "TC17", scene: "历史数据查询，返回最大数据点数量", input: "查询一个时间段内的数据，返回的数据点数量=10000个", expected: "系统正常返回历史数据，数据完整准确" },
]);

const userPermissionCases = ref([
  { id: "TC18", scene: "建筑管理者查看所有数据和进行系统设置", input: "用户角色=建筑管理者", expected: "系统允许用户查看所有数据和进行系统设置" },
  { id: "TC19", scene: "建筑租户查看与自身相关的维护信息和安全报告", input: "用户角色=建筑租户", expected: "系统允许用户查看自身相关维护信息和安全报告，但不允许查看其他信息" },
  { id: "TC20", scene: "用户生成历史异常数据报告，具有管理员权限", input: "用户角色=管理员", expected: "系统允许用户生成历史异常数据报告" },
  { id: "TC21", scene: "用户生成历史异常数据报告，不具有管理员权限", input: "用户角色=普通用户", expected: "系统不允许用户生成报告，提示权限不足" },
]);
</script>

<!-- <style scoped>
.boundary-value-analysis {
  max-width: 900px;
  margin: 24px auto;
  font-family: "Microsoft Yahei", sans-serif;
}
h2 {
  margin-bottom: 16px;
}
h3 {
  margin-top: 24px;
  margin-bottom: 12px;
}
</style> -->


<script>
export default {
  name: 'Exercise6Solution'
}
</script>



