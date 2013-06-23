module.exports = function(karma) {
  var angularFiles = require(__dirname + '/angularFiles.js');
  karma.configure({
    frameworks: ['jasmine'],
    files: angularFiles.mergeFiles('jstdJquery'),
    exclude: ['**/*jstd*/**'].concat(angularFiles.files.jstdJqueryExclude),
    autoWatch: true,
    logLevel: karma.LOG_INFO,
    logColors: true,
    browsers: ['Chrome'],
    junitReporter: {
      outputFile: 'test_out/jquery.xml',
      suite: 'JQuery'
    }
  });
};