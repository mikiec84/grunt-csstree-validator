'use strict';


var csstree = require( 'csstree-validator' );


module.exports = function( grunt ) {

    grunt.registerMultiTask(
        'csstree-validator',
        'CSS(Tree) validator',
        function() {

            var i = 0,
                files = this.files[0].src,
                length = files.length;

            if ( ! length ) {
                grunt.log.warn( 'Could not find any files to validate' );
                return false;
            }

            for ( i; i < length; i++ ) {
                var file = files[i],
                    srcFile = file.toString();

                if ( srcFile && grunt.file.exists( srcFile ) ) {
                    var result = csstree.validateFile( srcFile );

                    if ( result[srcFile].toString() ) {
                        grunt.log.writeln(
                            csstree.reporters.console( result )
                        );

                        return false;
                    }
                }

            }

            return true;

        }
    )

};
