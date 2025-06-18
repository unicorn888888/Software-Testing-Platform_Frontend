<template>
  <div class="container">
    <div class="content">
      <p>代码思路：首先判断是否闰年，然后判断月份对应天数，之后判断天数，最后输出后一天日期（需要考虑是否要进位）。</p>
      <p>
        决策表分析：条件：是否闰年、是几月份（2月，大月，小月），日期
      </p>
    </div>
  </div>
</template>



<script>
export default {
  name: 'Exercise11Solution'
}
</script>



