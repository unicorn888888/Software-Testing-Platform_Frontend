<template>
  <div class="container">
    <div class="content">
      <p>某实时的Web系统，服务器端应用程序需要接受客户端发送的不同类型的数据包，为了使系统设计达到最优，使用统一接口， 接口（通用包）描述为：接口包的类型：正常交易包、查询包、退货包、换货包、部分退货包、部分换货包；涉及的商品种类： 1、2、3、4、5、6；支付类型：系统账户余额支付、货到付款、工行账户支付、农行账户支付、建行账户支付、交行账户支付、 邮储账户支付、礼品卡支付；发票类型：日用品、电脑配件、鞋、帽、家电、服装、电脑、ipad、手机、化妆品、食品、其他； 支付金额：货到付款无限制、银行支付不能超出最大限额2万、系统账户余额支付不能超出余额；订单状态：正在处理、 正在送货、处理完成、订单取消。用正交实验法设计用例。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Exercise14Requirement'
}
</script>
