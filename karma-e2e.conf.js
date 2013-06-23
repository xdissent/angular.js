module.exports = function(karma) {
  karma.configure({
    frameworks: ['ng-scenario'],
    files: ['build/docs/docs-scenario.js'],
    autoWatch: false,
    singleRun: true,
    logLevel: karma.LOG_INFO,
    logColors: true,
    browsers: ['Chrome'],
    proxies: {
      // angular.js, angular-resource.js, etc
      '/angular': 'http://localhost:8000/build/angular',
      '/': 'http://localhost:8000/build/docs/'
    },
    junitReporter: {
      outputFile: 'test_out/e2e.xml',
      suite: 'E2E'
    }
  });
};