<template>
  <div class="boundary-value-analysis">
    <section>
      <h3>1. 题目要求</h3>
      <p>边界值测试可以适用于function(method) level，class level, system level，分析电商平台系统测试时考虑的边界值情况。</p>
    </section>

    <section>
      <h3>2. 边界值分析</h3>

      <article>
        <h4>2.1 Function Level</h4>
        <p>方法级的边界值测试关注的是单个函数的输入输出边界。电商平台中很多基础操作都在这个层面进行测试。</p>
        <ul>
          <li><strong>商品数量限制方法：</strong>一个方法负责接收用户输入的商品数量。通常会规定最小购买数量为1，最大购买数量为99。边界值：1到99。</li>
          <li><strong>计算折扣价格的方法：</strong>如根据原价和折扣比例计算应付金额。假设折扣比例不能超过100%。边界值：0%到100%。</li>
          <li><strong>登录输入校验方法：</strong>用户名长度限制为20字符以内。边界值：1到20。</li>
        </ul>
      </article>

      <article>
        <h4>2.2 Class Level</h4>
        <p>类级边界值测试主要考虑类内部多个方法间的状态转换是否在合理边界内。</p>
        <ul>
          <li><strong>订单类状态：</strong>一个订单类可能包含多个状态（如“已创建”、“已支付”、“已发货”、“已收货”、“已取消”）。边界值在于状态转换的“临界点”：比如刚刚付款后立刻请求发货，系统是否能处理正确？</li>
          <li><strong>优惠券类：</strong>比如规定只能在满100元时使用10元券，最多叠加2张。
            <ul>
              <li>满99.99元时系统是否禁止使用；</li>
              <li>使用2张券是否通过，第3张是否被正确拒绝。</li>
            </ul>
          </li>
        </ul>
      </article>

      <article>
        <h4>2.3 System Level</h4>
        <p>系统级边界值测试从整个平台的角度出发，测试的是用户使用系统时能否在业务边界条件下获得正确反馈。</p>
        <ul>
          <li><strong>用户注册系统：</strong>注册时输入的用户名、密码、验证码等都可能涉及边界值。
            <ul>
              <li>用户名长度是否在系统限制范围内（如1~20字）？</li>
              <li>多次请求验证码是否超出系统频率限制？</li>
            </ul>
          </li>
          <li><strong>下单流程测试：</strong>
            <ul>
              <li>商品数量是否支持最大购买上限？</li>
              <li>使用优惠券、积分时是否超出账户上限或平台限制？</li>
            </ul>
          </li>
          <li><strong>支付系统：</strong>
            <ul>
              <li>金额是否符合边界值要求？如最低支付0.01元，最大支付99,999.99元？</li>
              <li>账户余额为0、余额刚好支付、余额不足等边界场景是否提示准确？</li>
            </ul>
          </li>
        </ul>
      </article>
    </section>
  </div>
</template>


<script>
export default {
  name: 'Exercise5Solution'
}
</script>



