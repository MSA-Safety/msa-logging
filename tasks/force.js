/**
 * Created by ccronmsa on 7/29/14.
 */
'use strict';

module.exports = function force(grunt) {

    grunt.registerMultiTask('force', 'turns the --force option ON or OFF',
        function() {
            if (this.target.toLowerCase() === 'on') {
                if ( !grunt.option( 'force' ) ) {
                    grunt.config.set('forceStatus', true);
                    grunt.option( 'force', true );
                }
            } else if (this.target.toLowerCase() === 'off') {
                if ( grunt.config.get('forceStatus') ) {
                    grunt.option( 'force', false );
                }
            }
        });

    // Options
    return {
        on: {
            options: 'ON'
        },
        off: {
            options: 'OFF'
        }
    };
};