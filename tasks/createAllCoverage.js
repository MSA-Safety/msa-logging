/**
 * Created by ccronmsa on 7/28/14.
 */
'use strict';

var fs = require('fs');

module.exports = function createAllCoverage(grunt) {

    grunt.registerMultiTask('createAllCoverage', function() {
        if(fs.existsSync(grunt.allCovFile)){
            // remove file if exists
            fs.unlinkSync(grunt.allCovFile);
        }

        // use {'flags': 'a'} to append and {'flags': 'w'} to erase and write a new file
        var file = fs.createWriteStream(grunt.allCovFile, {'flags': 'a'});
        grunt.log.writeln('generating instrumentation file: %s', grunt.allCovFile);

        // Clean specified files / dirs.
        this.filesSrc.forEach(function(filepath) {
            grunt.log.writeln("require file ./%s", filepath);
            fs.appendFileSync(grunt.allCovFile, 'require("./' + filepath + '");\n');
        });

        grunt.log.ok('generated %s', grunt.allCovFile);
    });

    return {
        source: [grunt.src]
    };
};