'use strict';


module.exports = function( grunt ) {

    grunt.initConfig( {
        'csstree-validator': {
            files: [ 'test/src/app.css', 'test/src/main.css' ]
        }
    } );

    grunt.loadTasks( 'tasks' );

    grunt.registerTask( 'default', [ 'csstree-validator' ] );

};
