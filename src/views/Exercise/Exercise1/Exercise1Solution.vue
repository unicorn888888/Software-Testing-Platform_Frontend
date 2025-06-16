<template>
  <div class="container">
    <div class="content">
      <p>代码思路：首先判断三边范围，然后判断是否构成三角形，最后判断是否是特殊三角形。</p>
      <p>
        边界值分析：边界值法取可选范围的最小值、最小值附近、正常值、最大值附近和最大值，题目规定范围为[1,1000]，可取的值可以是(1,3,500,998,1000)，如果是健壮性边界值，可以再取在最小值与最大值外的两个值，比如(0,1001)
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Exercise1Solution'
}
</script>



