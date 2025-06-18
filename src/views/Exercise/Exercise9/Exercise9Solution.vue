<template>
  <div class="container">
    <div class="content">
      <p>代码思路：首先判断三边范围，然后判断是否构成三角形，最后判断是否是特殊三角形。</p>
      <p>
        等价类分析：划分等价类：等边三角形，等腰三角形，普通三角形。无效等价类：不是三角形，超过范围
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Exercise9Solution'
}
</script>



