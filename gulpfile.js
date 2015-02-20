'use strict';

/***************************
 *  Globals
 ***************************/

// Include Gulp
var gulp = require('gulp');
// Include Path
var path = require('path');

// Include plugins
var plugins = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del'],
    replaceString: /\bgulp[\-.]/
});

// Define source paths
var src = [
    '**/*.js',
    '!.jshintrc',
    '!gulpfile.js',
    '!node_modules/**/*'
];

// Define beautifier options
var prettifyOpts = {
    "indent_size": 4,
    "indent_char": " ",
    "indent_level": 0,
    "indent_with_tabs": false,
    "preserve_newlines": true,
    "max_preserve_newlines": 10,
    "jslint_happy": false,
    "space_after_anon_function": false,
    "brace_style": "collapse",
    "keep_array_indentation": true,
    "keep_function_indentation": true,
    "space_before_conditional": true,
    "break_chained_methods": false,
    "eval_code": false,
    "unescape_strings": false,
    "wrap_line_length": 0
}
/* End Globals */


/************************************
 * Tasks
 ************************************/

/**
 *  JavaScript Tasks
 *******************************/

// Lint and format JS
gulp.task('lint-js', function() {
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
});

// Format JS
gulp.task('pretty-js', function() {
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
    gulp.watch(src, ['lint-js']);
});

// Default Task
gulp.task('default', ['watch']);