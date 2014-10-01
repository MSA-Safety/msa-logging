'use strict';


module.exports = function env(grunt) {
	// Load task
	grunt.loadNpmTasks('grunt-env');

	// Options
	return {
	    coverage: {
      	  //for require_helper
           APP_DIR_FOR_CODE_COVERAGE: '../' + grunt.instDir + "/"
        }
	};
};
