'use strict';


module.exports = function makeReport(grunt) {
	// Load task
	grunt.loadNpmTasks('grunt-istanbul');

	// Options
	return {
	    src : grunt.storeCoverageDir + '/**/*.json',
        options : {
          type : ['lcov', 'html', 'clover'],
         dir : grunt.reportDir + '/coverage',
          print : 'detail'
       }
	};
};
