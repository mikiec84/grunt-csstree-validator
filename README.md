# grunt-csstree-validator

Grunt plugin for the [CSS(Tree) Validator](https://github.com/csstree/validator)


### Install

```
npm install grunt-csstree-validator --save-dev
```


### Usage

```javascript
module.exports = function( grunt ) {

    grunt.initConfig( {
        'csstree-validator': {
            files: [ 'test/src/app.css', 'test/src/main.css' ]
        }
    } );

    grunt.loadNpmTasks( 'grunt-optimize-js' );

    grunt.registerTask( 'default', [ 'csstree-validator' ] );

};
```
