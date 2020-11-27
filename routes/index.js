const bannerRoutes = require('./banner')
const testRoutes = require('./test')

function init(app) {
  bannerRoutes(app)
  testRoutes(app)
}

exports.init = init
