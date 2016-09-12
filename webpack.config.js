switch (process.env.NODE_ENV) {
  case 'PROD':
    module.exports = require('./config/webpack.prod');
    break;
  case 'UAT':
    module.exports = require('./config/webpack.uat');
    break;
  case 'QA':
    module.exports = require('./config/webpack.qa');
    break;
  case 'DEV':
    module.exports = require('./config/webpack.dev');
    break;
  default:
    module.exports = require('./config/webpack.dev');
}