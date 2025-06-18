<template>
  <div class="container">
    <!-- 主按钮 -->
    <div class="main-buttons">
      <button
        :class="{ active: mainTab === 'script' }"
        @click="mainTab = 'script'"
      >
        测试脚本测试
      </button>
      <button
        :class="{ active: mainTab === 'performance' }"
        @click="mainTab = 'performance'"
      >
        性能测试
      </button>
    </div>

    <!-- 脚本测试内容 -->
    <div v-if="mainTab === 'script'" class="content-block">
      <p class="section-title">我们使用 Selenium IDE 工具进行测试，具体实现如下：</p>
      <img src="@/assets/x1.png" alt="Selenium 测试" class="single-img" />

      <p class="section-title">并且使用脚本代码完成功能流程的模拟点击：</p>
      <img src="@/assets/x2.png" alt="脚本点击图" class="single-img" />
    </div>

    <!-- 性能测试内容 -->
    <div v-if="mainTab === 'performance'" class="content-block">
      <!-- 子按钮 -->
      <div class="sub-buttons">
        <button
          v-for="tab in subTabs"
          :key="tab.value"
          :class="{ active: subTab === tab.value }"
          @click="subTab = tab.value"
        >
          {{ tab.label }}
        </button>
      </div>

      <!-- 测试接口表格 -->
      <div v-if="subTab === 'interface'" class="table-container">
        <table>
          <thead>
            <tr>
              <th>序号</th>
              <th>名称</th>
              <th>简述</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in interfaceData" :key="index">
              <td>{{ item.id }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.desc }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- 三个图片区域 -->
      <div v-if="subTab === 'result'" class="image-block">
        <img src="@/assets/x3.png" alt="测试结果" />
      </div>
      <div v-if="subTab === 'summary'" class="image-block">
        <img src="@/assets/x4.png" alt="数据汇总" />
      </div>
      <div v-if="subTab === 'chart'" class="image-block">
        <img src="@/assets/x5.png" alt="图形结果" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const mainTab = ref('script'); // 默认显示脚本测试
const subTab = ref('interface'); // 性能测试中默认显示接口

const subTabs = [
  { label: '测试接口', value: 'interface' },
  { label: '测试结果', value: 'result' },
  { label: '数据汇总', value: 'summary' },
  { label: '图形结果', value: 'chart' },
];

const interfaceData = [
  { id: 1, name: 'category_get', desc: '菜品分类查询' },
  { id: 2, name: 'category_delete', desc: '菜品分类删除' },
  { id: 3, name: 'setmeal_get', desc: '套餐查询' },
  { id: 4, name: 'setmeal_start', desc: '套餐起售停售' },
  { id: 5, name: 'dish_get', desc: '菜品查询' },
  { id: 6, name: 'orders_get', desc: '订单分页查询' },
  { id: 7, name: 'orders_receive', desc: '接单' },
  { id: 8, name: 'orders_send', desc: '订单派送' },
  { id: 9, name: 'employee_save', desc: '员工注册' },
  { id: 10, name: 'employee_login', desc: '员工登录' },
];
</script>

<style scoped>
.container {
  padding: 20px;
  font-family: 'Arial', sans-serif;
}

.main-buttons,
.sub-buttons {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.main-buttons button,
.sub-buttons button {
  padding: 10px 16px;
  border: 1px solid #ccc;
  background-color: white;
  cursor: pointer;
  font-size: 14px;
  border-radius: 6px;
  transition: background-color 0.2s ease;
}

button.active {
  background-color: #409eff;
  color: white;
  border-color: #409eff;
}

.content-block {
  margin-top: 20px;
}

.section-title {
  font-weight: bold;
  font-size: 16px;
  margin: 16px 0 8px;
}

.single-img,
.image-block img {
  width: 60%;
  max-width: 600px;
  border: 1px solid #ddd;
  margin-bottom: 20px;
  display: block;
}

.table-container {
  overflow-x: auto;
  max-width: 100%;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 12px;
}

th,
td {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
}

th {
  background-color: #f3f3f3;
}
</style>
