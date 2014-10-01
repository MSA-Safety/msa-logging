'use strict';

module.exports = function (grunt) {
    //Variables to share between tasks
    grunt.src = ['index.js', 'lib/**/*.js'];
    grunt.tests = ['test/**/*.test.js'];
    grunt.baseDir = 'build/';
    grunt.instDir = grunt.baseDir + '/coverage/instrument';
    grunt.storeCoverageDir = grunt.baseDir + '/coverage/report';
    grunt.reportDir = grunt.baseDir + 'report';
    grunt.platoDir = grunt.baseDir + 'plato';
    grunt.allCovFile = 'build/coverage/instrument/allCov.js';
	

	// Load the project's grunt tasks from a directory
    require('grunt-config-dir')(grunt, {
        configDir: require('path').resolve('tasks')
    });

    // Register group tasks
    grunt.registerTask('build', [ 'test' ]);
    grunt.registerTask('test', [ 'jshint:console', 'mochaTest:console' ]);
    grunt.registerTask('coverage', ['clean', 'env', 'instrument', 'createAllCoverage', 'mochaTest:console', 'mochaTest:allCoverage', 'storeCoverage', 'makeReport']);

    grunt.registerTask('test-bamboo', ['mochaTest:bamboo', 'copy:testResults', 'mochaTest:allCoverage']);
    grunt.registerTask('bamboo', ['clean', 'jshint:bamboo', 'env', 'instrument', 'createAllCoverage', 'test-bamboo', 'storeCoverage', 'makeReport', 'plato']);
};
