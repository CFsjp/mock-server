var Mock = require('mockjs')
var ok = require('../../utils').ok

module.exports = function (app) {
  /**
   * This function comment is parsed by doctrine
   * @route GET /test
   * @group test - 测试模拟接口
   */
  app.get('/test', function (req, res) {
    var data = Mock.mock({
      'createBy|5-10': ['@cname']
    })

    res.send(ok(data))
  })
}

/**
 * @typedef test
 * @property {string} createBy
 */
