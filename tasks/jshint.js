'use strict';


module.exports = function jshint(grunt) {
	// Load task
	grunt.loadNpmTasks('grunt-contrib-jshint');

	// Options
	return {
        console: {
            src: [grunt.src, grunt.tests],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        bamboo: {
            src: [grunt.src, grunt.tests],
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-junit-reporter'),
                reporterOutput: grunt.reportDir + '/junit-output.xml'
            }
        }
	};
};
