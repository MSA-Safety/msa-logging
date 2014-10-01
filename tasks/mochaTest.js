'use strict';


module.exports = function mochaTest(grunt) {
	// Load task
	grunt.loadNpmTasks('grunt-mocha-test');

	// Options
	return {
        console: {
            src: grunt.tests,
            options: {
                timeout: 6000,
                'check-leaks': true, // ui: 'bdd'
                reporter: 'spec'
            }
        },
        bamboo: {
            src: grunt.tests,
	        options: {
	            timeout: 6000,
	            'check-leaks': true, // ui: 'bdd',
	            reporter: 'mocha-bamboo-reporter'
	        }
        },
        allCoverage: {
            src: [grunt.allCovFile],
            options: {
                timeout: 6000,
                'check-leaks': true, // ui: 'bdd'
                reporter: 'spec'
            }
        }
	};
};
