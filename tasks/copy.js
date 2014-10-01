'use strict';


module.exports = function copy(grunt) {
	// Load task
	grunt.loadNpmTasks('grunt-contrib-copy');

	// Options
	return {
	    main: {
	        expand: true,
		    cwd:  grunt.reportDir + '/coverage/',
            src: '**/*',
            dest: '../target/site/clover/'
        },
        testResults: {
            src: 'mocha.json',
            dest: grunt.reportDir + '/mocha.json'
        }
	};
};
