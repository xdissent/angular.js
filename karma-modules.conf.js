module.exports = function(karma) {
  var angularFiles = require(__dirname + '/angularFiles.js');
  karma.configure({
    frameworks: ['jasmine'],
    files: angularFiles.mergeFiles('jstdModules', 'angularSrcModules'),
    exclude: ['**/*jstd*/**'],
    autoWatch: true,
    logLevel: karma.LOG_INFO,
    logColors: true,
    browsers: ['Chrome'],
    junitReporter: {
      outputFile: 'test_out/modules.xml',
      suite: 'modules'
    }
  });
};