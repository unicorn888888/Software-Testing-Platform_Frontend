<template>
  <div class="form-container">
    <p><strong>代码思路：</strong>首先判断数值合法性，然后判断通话分钟数，接着判断不按时缴费次数，最后得出折扣率，计算出总费用。</p>
    <p><strong>边界值分析：</strong>0<=分钟数<=44640，0<=不按时缴费次数<=11。</p>
    <p><strong>等价类分析：</strong></p>
    <p>变量 X 的等价类：</p>
    <p>X1：{ X | 0 ≤ X ≤ 60 } —— 有效</p>
    <p>X2：{ X | 60 < X ≤ 120 } —— 有效</p>
    <p>X3：{ X | 120 < X ≤ 180 } —— 有效</p>
    <p>X4：{ X | 180 < X ≤ 300 } —— 有效</p>
    <p>X5：{ X | 300 < X ≤ 44640 } —— 有效</p>
    <p>X6：{ X | X < 0 } —— 无效</p>
    <p>X7：{ X | X > 44640 } —— 无效</p>

    <p>变量 Y 的等价类：</p>
    <p>Y1：{ Y | 0 ≤ Y ≤ 1 } —— 有效</p>
    <p>Y2：{ Y | 1 < Y ≤ 2 } —— 有效</p>
    <p>Y3：{ Y | 2 < Y ≤ 3 } —— 有效</p>
    <p>Y4：{ Y | 3 < Y ≤ 6 } —— 有效</p>
    <p>Y5：{ Y | 6 < Y ≤ 11 } —— 有效</p>
    <p>Y6：{ Y | Y < 0 } —— 无效</p>
    <p>Y7：{ Y | Y > 11 } —— 无效</p>

    <p><strong>决策表分析：</strong></p>

    <h3>通话费用折扣率决策表</h3>
    <img src="@/assets/7-2.png" alt="7-2">
  </div>
</template>

<script>
export default {
  name: 'Exercise7Solution'
}
</script>



