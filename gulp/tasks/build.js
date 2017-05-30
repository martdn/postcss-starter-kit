'use strict';

const gulp = require('gulp');

gulp.task('build', ['dist:clean'], function () {
    gulp.start('js:build', 'css:build');
});