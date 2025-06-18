<template>
  <div>
    <p>接口：</p>
    <p>接口包的类型：正常交易包、查询包、退货包、换货包、部分退货包、部分换货包； 共6种情况</p>
    <p>涉及的商品种类：1、2、3、4、5、6；共6种情况</p>
    <p>支付类型：系统账户余额支付、货到付款、工行账户支付、农行账户支付、建行账户支付、交行账户支付、邮储账户支付、礼品卡支付；共8种情况</p>
    <p>发票类型：日用品、电脑配件、鞋、帽、家电、服装、电脑、ipad、手机、化妆品、食品、其他；共12种情况</p>
    <p>支付金额：货到付款无限制、银行支付不能超出最大限额2万、系统账户余额支付不能超出余额；共3种情况</p>
    <p>订单状态：正在处理、正在送货、处理完成、订单取消；共4种情况</p>

    <h1>得到的状态因子表如下</h1>
    <div>
        <el-table :data="tableData1" border style="width: 100%">
            <el-table-column prop="id" label="id" min-width="50" />
            <el-table-column prop="type" label="type" min-width="100" />
            <el-table-column prop="product" label="product" min-width="100" />
            <el-table-column prop="payment" label="payment" min-width="100" />
            <el-table-column prop="invoice" label="invoice" min-width="100" />
            <el-table-column prop="amount" label="amount" min-width="100" />
            <el-table-column prop="status" label="status" min-width="100" />
        </el-table>
    </div>
    <br>

    <h1>得到的正交表如下</h1>
    <div>
        <el-table :data="tableData2" border style="width: 100%">
            <el-table-column prop="case" label="case" min-width="50" />
            <el-table-column prop="type" label="type" min-width="100" />
            <el-table-column prop="product" label="product" min-width="100" />
            <el-table-column prop="payment" label="payment" min-width="100" />
            <el-table-column prop="invoice" label="invoice" min-width="100" />
            <el-table-column prop="amount" label="amount" min-width="100" />
            <el-table-column prop="status" label="status" min-width="100" />
            <el-table-column prop="pairings" label="pairings" min-width="100" />
        </el-table>
    </div>

  </div>
</template>

<script setup>
import {tableData1} from "@/mock/Exercise14-1.js";
import {tableData2} from "@/mock/Exercise14-2.js";
defineOptions({
  name:'AnswerPage'
})

</script>

<script>
export default {
  name: 'Exercise14Solution'
}
</script>



