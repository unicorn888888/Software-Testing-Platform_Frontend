<template>
  <div>
    <h2>测试用例</h2>
    <table border="1" style="margin-bottom: 10px;">
      <thead>
        <tr><th>输入</th><th>预期输出</th></tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in testCases" :key="index">
          <td>{{ item.input }}</td>
          <td>{{ item.expected }}</td>
        </tr>
      </tbody>
    </table>
    <button @click="runTests">运行测试</button>

    <div v-if="results.length">
      <h3>测试结果</h3>
      <ul>
        <li v-for="(res, index) in results" :key="index">
          测试 {{ index + 1 }}：{{ res }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Exercise1Test',
  data() {
    return {
      testCases: [
        { input: "2 3", expected: "5" },
        { input: "4 1", expected: "5" }
      ],
      results: []
    }
  },
  methods: {
    solve(input) {
      // 模拟一个 JS 实现（例如加法）
      const [a, b] = input.split(" ").map(Number)
      return (a + b).toString()
    },
    runTests() {
      this.results = this.testCases.map(tc => {
        const output = this.solve(tc.input)
        return output === tc.expected ? "通过 ✅" : `失败 ❌（得到：${output}）`
      })
    }
  }
}
</script>
