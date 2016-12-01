require('babel-register')
var config = require('../../../config')

// http://nightwatchjs.org/guide#settings-file
module.exports = {
  'src_folders': ['test/e2e/server/specs'],
  'output_folder': 'test/e2e/server/reports',
  'custom_assertions_path': ['test/e2e/server/custom-assertions'],

  'selenium': {
    'start_process': true,
    'server_path': 'node_modules/selenium-server/lib/runner/selenium-server-standalone-2.53.1.jar',
    'host': '127.0.0.1',
    'port': 4444,
    'cli_args': {
      'webdriver.chrome.driver': require('chromedriver').path
    }
  },

  'test_settings': {
    'default': {
      'selenium_port': 4444,
      'selenium_host': 'localhost',
      'silent': true,
      'globals': {
        'devServerURL': 'http://localhost:' + (process.env.PORT || config.server.dev.port)
      }
    },

    'chrome': {
      'desiredCapabilities': {
        'browserName': 'chrome',
        'javascriptEnabled': true,
        'acceptSslCerts': true
      }
    },

    'firefox': {
      'desiredCapabilities': {
        'browserName': 'firefox',
        'javascriptEnabled': true,
        'acceptSslCerts': true
      }
    }
  }
}
