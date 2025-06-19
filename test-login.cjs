const assert = require('assert');
const response = require('./response');

describe('登录接口响应测试', function () {
  it('应该返回 code = 1 表示成功', function () {
    assert.strictEqual(response.code, 1);
  });

  it('msg 字段应为 null', function () {
    assert.strictEqual(response.msg, null);
  });

  it('data 中应该包含 status = "success"', function () {
    assert.strictEqual(response.data.status, 'success');
  });

  it('data.message 应该为“测试执行成功”', function () {
    assert.strictEqual(response.data.message, '测试执行成功');
  });
});
