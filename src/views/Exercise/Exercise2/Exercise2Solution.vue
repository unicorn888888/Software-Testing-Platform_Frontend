<template>
  <div class="container">
    <div class="content">
      <p>代码思路：首先判断是否闰年，然后判断月份对应天数，之后判断天数，最后输出后一天日期（需要考虑是否要进位）。</p>
      <p>
        边界值分析：边界值法取可选范围的最小值、最小值附近、正常值、最大值附近和最大值，采用健壮边界时，要考虑在最小值与最大值外的值。对于年份，需要考虑1899年与2101年，月份考虑0与13月，天数考虑0与超过月份最大天数的值。
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Exercise2Solution'
}
</script>



