<template>
  <div class="system-test-container">
    <h1>系统测试说明</h1>


    <!-- 测试方法 -->
    <section>
      <h2>1. 采用的测试方法</h2>
      <ul>
        <li>• 系统级功能：测试系统的各项功能是否按照预期工作。</li>
        <li>• 系统业务流：分析并测试系统完成一系列业务操作的流程是否顺畅。</li>
        <li>• 系统级别的接口：检查系统各部分之间的接口是否能够正确交互。</li>
        <li>• 系统级别的输入和输出：验证系统的输入是否被正确处理，输出是否符合预期。</li>
        <li>• 系统级别的状态转换：确保系统在不同状态之间的转换是正确的。</li>
        <li>• 系统级别数据：测试系统数据的一致性、完整性和准确性。</li>
        <li>• 系统非功能：包括性能、安全性、可用性等非功能性需求的测试。</li>
      </ul>
    </section>

    <!-- 测试环境 -->
    <section>
      <h2>2. 测试环境</h2>
      <p><strong>硬件需求：</strong>主机一台</p>
      <p><strong>软件需求：</strong></p>
      <ul>
        <li>• Windows 10 操作系统</li>
        <li>• Apifox 测试工具</li>
        <li>• Selenium IDE 测试工具</li>
      </ul>
    </section>

    <!-- 测试对象 -->
    <section>
      <h2>3. 测试对象</h2>
      <p>SKY 外卖管理平台</p>
    </section>

    <!-- 覆盖业务功能 -->
    <section>
      <h2>4. 覆盖业务功能</h2>
      <table>
        <thead>
          <tr>
            <th>子系统</th>
            <th>功能点</th>
            <th>测试类型</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowspan="2">用户子系统</td>
            <td>员工登录登出</td>
            <td>功能测试</td>
          </tr>
          <tr>
            <td>新增员工</td>
            <td>功能测试</td>
          </tr>

          <tr>
            <td rowspan="2">菜品管理子系统</td>
            <td>菜品分页查询</td>
            <td>功能测试</td>
          </tr>
          <tr>
            <td>修改菜品</td>
            <td>功能测试</td>
          </tr>

          <tr>
            <td rowspan="2">套餐管理子系统</td>
            <td>套餐分页查询</td>
            <td>功能测试</td>
          </tr>
          <tr>
            <td>新增套餐</td>
            <td>功能测试</td>
          </tr>

          <tr>
            <td rowspan="2">分类管理子系统</td>
            <td>分类分页查询</td>
            <td>功能测试</td>
          </tr>
          <tr>
            <td>删除分类</td>
            <td>功能测试</td>
          </tr>

          <tr>
            <td rowspan="3">订单管理子系统</td>
            <td>订单分页查询</td>
            <td>功能测试</td>
          </tr>
          <tr>
            <td>接单</td>
            <td>功能测试</td>
          </tr>
          <tr>
            <td>拒单 / 订单派送</td>
            <td>功能测试</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
export default {
  name: "SystemTestReport"
};
</script>

<style scoped>
.system-test-container {
  padding: 20px;
  font-family: "Arial", sans-serif;
  color: #333;
  line-height: 1.6;
}

h1 {
  font-size: 26px;
  margin-bottom: 20px;
  color: #2c3e50;
}

h2 {
  font-size: 22px;
  margin-top: 20px;
  margin-bottom: 10px;
  color: #34495e;
}

h3 {
  font-size: 18px;
  margin-top: 15px;
  margin-bottom: 8px;
  color: #4b6584;
}

ul {
  padding-left: 20px;
  margin-bottom: 10px;
}

li {
  margin-bottom: 6px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 15px;
}

th, td {
  border: 1px solid #ccc;
  padding: 8px 12px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}
</style>
