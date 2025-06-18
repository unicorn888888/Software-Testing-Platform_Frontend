<template>
  <div class="report-container">
    <div class="button-group">
      <button
        :class="{'active': selected === 'apifox'}"
        @click="selected = 'apifox'"
      >
        Apifox 自动化测试前后端系统接口报告
      </button>
      <button
        :class="{'active': selected === 'junit'}"
        @click="selected = 'junit'"
      >
        Junit自动化测试后端子系统之间接口报告
      </button>
    </div>

    <div v-if="selected === 'apifox'" class="content apifox-content">
      <div class="images-row">
        <img src="@/assets/test-result-3.png" alt="test-result-3" />
        <img src="@/assets/test-result-4.png" alt="test-result-4" />
      </div>
      <p class="description">
        上图为部分测试，共测试了 26 个用例，其中 26 个通过测试，0 个未通过测试，通过率为 100%。设计的测试用例全部通过测试，达到了测试的验收标准之一。
      </p>
    </div>

    <div v-if="selected === 'junit'" class="content junit-content">
      <h3>订单详情子系统接口的测试用例如下</h3>
      <img src="@/assets/test-result-5.png" alt="test-result-5" />
      <h3>三个子系统之间的接口测试情况如下</h3>
      <img src="@/assets/test-result-6.png" alt="test-result-6" />
    </div>
  </div>
</template>

<script>
export default {
  name: "InterfaceTestReport",
  data() {
    return {
      selected: "apifox"
    };
  }
};
</script>

<style scoped>
.report-container {
  padding: 20px;
  font-family: Arial, sans-serif;
}

.button-group {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.button-group button {
  padding: 10px 20px;
  border: 1px solid #007bff;
  background-color: white;
  color: #007bff;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;
}

.button-group button.active {
  background-color: #007bff;
  color: white;
}

.images-row {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.images-row img {
  width: 48%;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.description {
  margin-top: 15px;
  font-size: 16px;
  color: #333;
  line-height: 1.6;
}

.junit-content img {
  width: 100%;
  max-width: 800px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 8px;
}
</style>
