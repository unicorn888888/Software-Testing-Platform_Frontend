<template>
  <div class="page">
    <el-collapse accordion>
      <el-collapse-item
        v-for="(module, moduleIndex) in modules"
        :key="module.title"
        :name="module.title"
      >
        <template #title>
          <strong>{{ module.title }}</strong>
        </template>

        <div
          v-for="(item, index) in module.items"
          :key="item.id"
          class="test-case-block"
        >
          <h3>{{ item.id }} - {{ item.function }}</h3>

          <el-descriptions :column="2" border>
            <el-descriptions-item label="用例编号">{{ item.id }}</el-descriptions-item>
            <el-descriptions-item label="系统功能">{{ item.function }}</el-descriptions-item>
            <el-descriptions-item label="用例设计方法">{{ item.method }}</el-descriptions-item>
            <el-descriptions-item label="前置条件">{{ item.precondition }}</el-descriptions-item>
          </el-descriptions>

          <el-table :data="item.states" style="width: 100%; margin-top: 10px;" border>
            <el-table-column label="状态流编号" prop="index" width="100" />
            <el-table-column label="初始输入" prop="input" />
            <el-table-column label="最后预期输出" prop="output" />
          </el-table>

          <img
            :src="item.imagePath"
            alt="测试用例图示"
            style="width: 100%; margin-top: 10px; border: 1px solid #ccc;"
          />
          <!-- 只给登录登出添加按钮 -->
          <el-button
            v-if="item.id === 'SKY_ST_TEST_CASE_1'"
            type="primary"
            style="margin-top: 10px;"
            @click="startTest"
          >
            开始测试
          </el-button>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import img1 from '@/assets/1.png';
import img2 from '@/assets/2.png';
import img3 from '@/assets/3.png';
import img4 from '@/assets/4.png';
import img5 from '@/assets/5.png';
import img6 from '@/assets/6.png';
import img7 from '@/assets/7.png';
import img8 from '@/assets/8(2).png';
import img9 from '@/assets/9.png';
import img10 from '@/assets/10.png';
import img11 from '@/assets/11.png';
import img12 from '@/assets/12.png';


export default {
  name: 'SystemTest',
  data() {
    const testCases = [
      { id: 'SKY_ST_TEST_CASE_1', function: '员工登录登出', method: '场景法', precondition: '无',imagePath:img1 , states: [ { index: 1, input: '用户输入正确的账号密码', output: '登录成功' }, { index: 2, input: '用户输入不存在的账号', output: '提示账号不存在，登录失败' }, { index: 3, input: '用户输入错误的密码', output: '提示密码错误，登录失败' }, { index: 4, input: '用户点击登出按钮', output: '清除登录信息，登出' } ] },
      
      { id: 'SKY_ST_TEST_CASE_2', function: '新增员工', method: '场景法', precondition: '无', imagePath:img2, states: [ { index: 1, input: '用户名已存在在数据库中', output: '账号已存在' }, { index: 2, input: '用户名不存在在数据库中', output: '员工添加成功！' }, { index: 3, input: '用户输入错误的手机号', output: '提示请输入正确的手机号!' }, { index: 4, input: '用户输入错误的身份证号码', output: '提示身份证号码不正确' } ] },
      { id: 'SKY_ST_TEST_CASE_3', function: '菜品分页查询', method: '场景法', precondition: '无', imagePath: img3, states: [ { index: 1, input: '分页每页大小和页数选择正确', output: '正确查询菜品' }, { index: 2, input: '页数选择-1等非法数', output: '系统自动矫正页数并正确查询' } ] },
      { id: 'SKY_ST_TEST_CASE_4', function: '修改菜品', method: '场景法', precondition: '无', imagePath: img4, states: [ { index: 1, input: '菜品价格输入非法', output: '菜品价格格式有误，请输入大于零且最多保留两位小数的金额' }, { index: 2, input: '未上传图片', output: '菜品图片不能为空' }, { index: 3, input: '价格图片等正常上传', output: '菜品修改成功' } ] },
      { id: 'SKY_ST_TEST_CASE_5', function: '套餐分页查询', method: '场景法', precondition: '无', imagePath: img5, states: [ { index: 1, input: '分页每页大小和页数选择正确', output: '正确查询套餐' }, { index: 2, input: '页数选择-1等非法数', output: '系统自动矫正页数并正确查询' } ] },
      { id: 'SKY_ST_TEST_CASE_6', function: '新增套餐', method: '场景法', precondition: '无', imagePath: img6, states: [ { index: 1, input: '用户输入非法的套餐名称', output: '登录成功' }, { index: 2, input: '用户输入非法的套餐价格', output: '提示账号不存在，登录失败' }, { index: 3, input: '用户未上传套餐图片', output: '提示密码错误，登录失败' }, { index: 4, input: '用户未选择套餐分类', output: '清除登录信息，登出' }, { index: 5, input: '用户未选择菜品', output: '套餐下菜品不能为空' }, { index: 6, input: '用户输入信息均正确', output: '套餐添加成功！' } ] },
      { id: 'SKY_ST_TEST_CASE_7', function: '分类分页查询', method: '场景法', precondition: '无', imagePath: img7, states: [ { index: 1, input: '分页每页大小和页数选择正确', output: '正确查询分类' }, { index: 2, input: '页数选择-1等非法数', output: '系统自动矫正页数并正确查询' } ] },
      { id: 'SKY_ST_TEST_CASE_8', function: '删除分类', method: '场景法', precondition: '无', imagePath: img8, states: [ { index: 1, input: '删除关联了菜品的分类', output: '当前分类关联了菜品,不能删除' }, { index: 2, input: '删除关联了套餐的分类', output: '当前分类关联了套餐,不能删除' }, { index: 3, input: '删除无关联的分类', output: '删除成功' } ] },
      { id: 'SKY_ST_TEST_CASE_9', function: '订单分页查询', method: '场景法', precondition: '无', imagePath: img9, states: [ { index: 1, input: '分页每页大小和页数选择正确', output: '正确查询订单' }, { index: 2, input: '页数选择-1等非法数', output: '系统自动矫正页数并正确查询' } ] },
      { id: 'SKY_ST_TEST_CASE_10', function: '接单', method: '场景法', precondition: '无', imagePath: img10, states: [ { index: 1, input: '选择待接单的订单，点击接单', output: '操作成功，订单变为待派送状态' } ] },
      { id: 'SKY_ST_TEST_CASE_11', function: '拒单', method: '场景法', precondition: '无', imagePath: img11, states: [ { index: 1, input: '选择待接单的订单，点击拒单', output: '操作成功，订单变为已取消状态' } ] },
      { id: 'SKY_ST_TEST_CASE_12', function: '订单派送', method: '场景法', precondition: '无', imagePath: img12, states: [ { index: 1, input: '选择待派送的订单，点击派送', output: '操作成功，订单变为派送中状态' } ] }
    ];

    return {
      modules: [
        { title: '用户子系统', items: testCases.slice(0, 2) },
        { title: '菜品管理子系统', items: testCases.slice(2, 4) },
        { title: '套餐管理子系统', items: testCases.slice(4, 6) },
        { title: '分类管理子系统', items: testCases.slice(6, 8) },
        { title: '订单管理子系统', items: testCases.slice(8, 12) }
      ]
    };
  },
   methods: {
    async startTest() {
      try {
        const res = await fetch('http://localhost:3000/run-selenium', {
          method: 'POST'
        });
        const result = await res.text();
        this.$message.success('测试完成：' + result);
      } catch (err) {
        this.$message.error('测试失败：' + err.message);
      }
    }
  }
};
</script>

<style scoped>
.page {
  padding: 30px;
}
.test-case-block {
  margin-bottom: 30px;
  padding: 15px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #f9f9f9;
}
</style>
