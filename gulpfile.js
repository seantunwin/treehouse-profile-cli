'use strict';

/***************************
 *  Globals
 ***************************/

// Include Gulp
var gulp = require('gulp');

// Include plugins
var plugins = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*'],
    replaceString: /\bgulp[\-.]/
});

// The filename that has been passed as a parameter
//     -- see @function getFile
var file = getFile();

// Define source paths
//    -- set as @var file if exists
var src = (file) ? file : [
    '**/*.js',
    '!.jshintrc',
    '!gulpfile.js',
    '!node_modules/**/*'
];


// Define beautifier options
var prettifyOpts = {
    'indent_size': 4,
    'indent_char': ' ',
    'indent_level': 0,
    'indent_with_tabs': false,
    'preserve_newlines': true,
    'max_preserve_newlines': 10,
    'jslint_happy': false,
    'space_after_anon_function': false,
    'brace_style': 'collapse',
    'keep_array_indentation': true,
    'keep_function_indentation': true,
    'space_before_conditional': true,
    'break_chained_methods': false,
    'eval_code': false,
    'unescape_strings': false,
    'wrap_line_length': 0
};
/* End Globals */


/************************************
 * Functions
 ************************************/

/**
 * Get the file name if passed as parameter
 * @description : Pass a filename at runtime and grab it
 * @tutorial : gulp <task> [--file] [filename]
 * @return {string} : filename to run task(s) on
 **/
function getFile() {
    var args = process.argv.slice(2);
    var flag = args[1];

    // Return filename when flag is '--file' or undefined
    return (flag && flag === '--file') ? args[2] : undefined;
}
/* End Functions */


/************************************
 * Tasks
 ************************************/

/**
 *  JavaScript Tasks
 *******************************/

// Combine JS tasks (lint and format)
gulp.task('js', ['js:lint', 'js:pretty'], function() {
    return getFile();
});

// Lint JS
gulp.task('js:lint', function() {
    return gulp.src(src)
        .pipe(plugins.plumber({
            errorHandler: function(error) {
                console.log(error.message);
                this.emit('end');
            }
        }))
        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter('jshint-stylish'))
        .pipe(plugins.jsPrettify(prettifyOpts))
        .pipe(gulp.dest('./'))
        .pipe(plugins.notify('JavaScript has been linted'));
}); /* End js:lint */

// Format JS
gulp.task('js:pretty', function() {
    return gulp.src(src)
        .pipe(plugins.plumber({
            errorHandler: function(error) {
                console.log(error.message);
                this.emit('end');
            }
        }))
        .pipe(plugins.jsPrettify(prettifyOpts))
        .pipe(gulp.dest('./'))
        .pipe(plugins.notify('JavaScript has been formatted'));
});

/**
 *  Watch Tasks
 *  *****************************/
// Watch JS Task
gulp.task('watch', function() {
    gulp.watch(src, ['js']);
});

// Default Task
gulp.task('default', ['watch']);
/* End Tasks */