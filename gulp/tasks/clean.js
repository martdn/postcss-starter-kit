'use strict';

const gulp      = require('gulp');
const clean     = require('gulp-rimraf');
const config    = require('../config.js');

gulp.task('dist:clean', () => {
    return gulp.src(config.path.urlPublic + 'dist', { read: false })
        .pipe(clean());
});