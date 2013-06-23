module.exports = function(karma) {
  var angularFiles = require(__dirname + '/angularFiles.js');
  karma.configure({
    frameworks: ['jasmine'],
    files: angularFiles.mergeFiles('jstd'),
    exclude: ['**/*jstd*/**'].concat(angularFiles.files.jstdExclude),
    autoWatch: true,
    logLevel: karma.LOG_INFO,
    logColors: true,
    browsers: ['Chrome'],
    junitReporter: {
      outputFile: 'test_out/jqlite.xml',
      suite: 'jqLite'
    }
  });
};