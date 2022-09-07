const webpackConfig = require("./webpack.config.js");

module.exports = function (grunt) {
  // load npm tasks for grunt-* libs, excluding grunt-cli
  require("matchdep")
    .filterDev("{grunt,gruntify}-*")
    .filter(function (pkg) {
      return ["grunt-cli"].indexOf(pkg) < 0;
    })
    .forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    webpack: {
      myConfig: webpackConfig,
    },
  });

  grunt.registerTask("coverage", "CLI reporter for karma-coverage", function () {
    var coverageReports = grunt.file.expand("coverage/*/coverage.txt");
    var reports = {};
    var report;
    var i;
    var len;

    for (i = 0, len = coverageReports.length; i < len; i++) {
      report = grunt.file.read(coverageReports[i]);
      if (!reports[report]) {
        reports[report] = [coverageReports[i]];
      } else {
        reports[report].push(coverageReports[i]);
      }
    }

    for (report in reports) {
      if (reports.hasOwnProperty(report)) {
        for (i = 0, len = reports[report].length; i < len; i++) {
          grunt.log.writeln(reports[report][i]);
        }
        grunt.log.writeln(report);
      }
    }
  });
};
