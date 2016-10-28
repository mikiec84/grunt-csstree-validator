# grunt-csstree-validator

Grunt plugin for the [CSS(Tree) Validator](https://github.com/csstree/validator)

`CSS(Tree) Validator` helps to validate your CSS code according to [CSS rules](https://csstree.github.io/docs/syntax.html).

[![dependencies Status](https://david-dm.org/sergejmueller/grunt-csstree-validator/status.svg)](https://david-dm.org/sergejmueller/grunt-csstree-validator)
[![Build Status](https://travis-ci.org/sergejmueller/grunt-csstree-validator.svg?branch=master)](https://travis-ci.org/sergejmueller/grunt-csstree-validator)
[![Code Climate](https://codeclimate.com/github/sergejmueller/grunt-csstree-validator/badges/gpa.svg)](https://codeclimate.com/github/sergejmueller/grunt-csstree-validator)
[![Known Vulnerabilities](https://snyk.io/test/github/sergejmueller/grunt-csstree-validator/11210c485ab0f51ad5d9d7856ac2300c12aaa269/badge.svg)](https://snyk.io/test/github/sergejmueller/grunt-csstree-validator/11210c485ab0f51ad5d9d7856ac2300c12aaa269)


### Install

```bash
npm install grunt-csstree-validator --save-dev
```

*or*

```bash
yarn add grunt-csstree-validator --dev
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

`files` is an array with CSS file paths to validate. A single CSS file as a string is also possible.


### Why

Ideally suited for the [pre-commit hook](https://www.npmjs.com/package/pre-commit).
