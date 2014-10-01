/**
 * Created by ccronmsa on 7/28/14.
 */


module.exports = function plato(grunt) {
    // Load task
    grunt.loadNpmTasks('grunt-plato');

    var minjs = require('node-json-minify');

    // Options
    return {
        build: {
            options : {
                jshint: eval('(' + minjs(grunt.file.read('.jshintrc')) + ')')
            },
            files: {
                'build/plato' : grunt.src
            }
        }
    };
};