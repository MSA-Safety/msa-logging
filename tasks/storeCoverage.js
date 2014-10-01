'use strict';


module.exports = function storeCoverage(grunt) {
	// Load task
	grunt.loadNpmTasks('grunt-istanbul');

	// Options
	return {
	    options : {
          dir : grunt.storeCoverageDir
        }
	};
};
