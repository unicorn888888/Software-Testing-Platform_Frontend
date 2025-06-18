<template>
  <div class="integration-container">
    <h1>集成测试说明</h1>

    <section>
      <h2>1. 进入标准</h2>
      <p>
        编码完成，单元测试完成。集成测试计划完成，时间表、工具及人员安排到位。
      </p>
    </section>

    <section>
      <h2>2. 集成内容</h2>
      <ul>
        <li>
          <strong>1. 函数集成：</strong>如函数间接口、函数是否调用正常。
        </li>
        <li>
          <strong>2. 功能集成：</strong>如不同函数间实现的业务功能。
        </li>
        <li>
          <strong>3. 数据集成：</strong>如数据传递是否正确，对于传入值的控制范围是否一致等。
        </li>
        <li>
          <strong>4. 子系统集成：</strong>如把不同通信子系统、业务子系统及报表子系统进行集成。
        </li>
      </ul>
    </section>

    <section>
      <h2>3. 集成策略</h2>
      <p>
        本系统的集成测试采用自底向上的集成（Bottom-Up Integration）方式。
        自底向上集成方式从程序模块结构中最底层的模块开始组装和测试。
        因为模块是自底向上进行组装的，对于一个给定层次的模块，它的子模块（包括子模块的所有下属模块）事前已经完成组装并经过测试，所以不再需要编制桩模块。
        选择这种集成方法，管理方便，测试人员能较好地锁定软件故障所在位置。
      </p>
      <p>集成测试中的主要步骤：</p>
      <ul>
        <li>• 制订并审核集成测试计划</li>
        <li>• 测试用例分析、设计及评审</li>
        <li>• 测试的实施</li>
        <li>• 测试的执行</li>
        <li>• 测试的分析和评估</li>
      </ul>
    </section>

    <section>
      <h2>4. 集成顺序</h2>
      <ul>
        <li><strong>1. 软件集成顺序：</strong>自底向上，先函数、数据、功能再子系统。</li>
        <li><strong>2. 软件/硬件集成顺序：</strong>无。</li>
      </ul>
    </section>

    <section>
      <h2>5. 集成测试验收标准</h2>

      <h3>5.1 模块验收标准</h3>
      <ul>
        <li>• 接口：接口提供的功能或者数据正确。</li>
        <li>• 功能点：验证程序与产品描述、用户文档中的全部说明相对应，一致性。</li>
        <li>• 流程处理：验证程序与产品描述、用户文档中的全部说明相对应，一致性。</li>
        <li>• 外部接口：验证程序与产品描述、用户文档中的全部说明相对应，一致性。</li>
      </ul>

      <h3>5.2 集成测试验收标准</h3>
      <p>
        首先，集成测试用例中所设计的功能测试用例必须全部通过，性能及其他类型测试用例 95% 以上通过。
        在未通过的测试用例中，不能含有“系统崩溃”和“严重错误”这两种错误，“一般错误”小于 1%。
        测试结果与测试用例中期望的结果一致，测试通过，否则表明测试未通过。
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: "IntegrationTestDescription"
};
</script>

<style scoped>
.integration-container {
  padding: 20px;
  font-family: "Arial", sans-serif;
  line-height: 1.6;
  color: #333;
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

p {
  margin-bottom: 10px;
}

ul {
  padding-left: 20px;
  margin-bottom: 10px;
}

li {
  margin-bottom: 6px;
}
</style>
