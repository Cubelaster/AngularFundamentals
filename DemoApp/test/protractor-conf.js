exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  seleniumServerJar: './node_modules/protractor/selenium/selenium-server-standalone-2.53.1.jar',
  specs: [
    'e2e/*.js'
  ],
  capabilities: {
    'browserName': 'chrome'
  }


  // allScriptsTimeout: 11000,

  // baseUrl: 'http://localhost:8000/app/',

  // framework: 'jasmine',

  // jasmineNodeOpts: {
  //   defaultTimeoutInterval: 30000
  // }
};
