'use strict';


module.exports = function instrument(grunt) {
	// Load task
	grunt.loadNpmTasks('grunt-istanbul');

	// Options
	return {
	    files : [grunt.src], // <-- add index.js here
        options : {
          lazy : true,
          basePath : grunt.instDir
        }
	};
};
