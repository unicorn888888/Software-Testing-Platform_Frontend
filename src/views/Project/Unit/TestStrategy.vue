<template>
  <div class="unit-test-container">
    <h1>单元测试说明</h1>

    <section>
      <h2>1. 测试项目</h2>
      <p>
        根据《软件详细设计说明书》中的详细设计内容，单元测试的测试项目如下：
      </p>
      <ul>
        <li>• 用户模块</li>
        <li>• 菜品模块</li>
        <li>• 订单模块</li>
      </ul>
    </section>

    <section>
      <h2>2. 测试方法</h2>
      <p>
        根据类规约和操作规约构建测试用例，合理利用传统
        <strong>等价类划分法</strong>、
        <strong>边界值分析法</strong>、
        <strong>判定表法</strong> 等黑盒测试方法和
        <strong>语句覆盖</strong>、
        <strong>路径覆盖</strong> 等白盒测试方法。
      </p>
      <p>对于具有特殊需求的类，采用以下两种方法设计测试用例：</p>
      <ul>
        <li>
          <strong>(1). 状态转换图法：</strong>
          根据被测试类的对象状态及其状态转移构建测试用例，全面测试正常转换、异常转换及转换条件。
        </li>
        <li>
          <strong>(1). 基于实现的测试：</strong>
          使用逻辑覆盖法、数据流分析法等白盒测试技术测试程序的逻辑结构或数据流，以确保覆盖率。
        </li>
      </ul>
      <p>更详细的测试策略请参考《单元测试说明》。</p>
    </section>

    <section>
      <h2>3. 测试通过/失败标准</h2>

      <h3>测试通过的标准：</h3>
      <ul>
        <li>• 所有单元测试的用例都被执行并通过；</li>
        <li>• 所有发现的缺陷都被修正并通过回归测试；</li>
        <li>• 所有被测对象的前置条件和后置条件组合覆盖率达到 100％，或能明确说明无需覆盖的理由；</li>
        <li>• 单元测试报告被授权人批准。</li>
      </ul>

      <h3>测试失败的标准：</h3>
      <ul>
        <li>• 严重缺陷密度大于 15 个/KLOC；</li>
        <li>• 存在重大设计问题，导致接口、功能、数量变化超过 20％，测试继续无意义；</li>
        <li>• 关键功能未被设计，新增设计导致变化超过 20％，测试继续无意义。</li>
      </ul>

      <h3>测试结果审批流程：</h3>
      <ol>
        <li>开发人员提交单元测试报告</li>
        <li>开发或测试经理签字并提交 SQA</li>
        <li>SQA 评审并签字（测试经理参与）</li>
        <li>产品经理签字</li>
      </ol>
    </section>

    <section>
      <h2>4. 测试挂起/恢复的条件</h2>

      <h3>测试挂起条件：</h3>
      <ul>
        <li>• 单个类在测试中遇到阻塞用例；</li>
        <li>• 超过 20％ 的被测类遇到阻塞用例；</li>
        <li>• 出现新增需求，相关类测试挂起；</li>
        <li>• 开发人员提出设计变更，相关类测试挂起。</li>
      </ul>

      <h3>测试恢复条件：</h3>
      <ul>
        <li>• 测试挂起条件已解除；</li>
        <li>• 被测对象已达单元测试入口条件，并通过代码走读（附走读报告）与语法检查（附检查结果）。</li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: "UnitTestDescription"
};
</script>

<style scoped>
.unit-test-container {
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

ul, ol {
  padding-left: 20px;
  margin-bottom: 10px;
}

li {
  margin-bottom: 6px;
}
</style>
