'use strict';

const gulp       = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const config     = require('../config');

gulp.task('css:build', function () {
    const postcss = require('gulp-postcss');
    const nano    = require('gulp-cssnano');

    return gulp.src(config.path.src.css)
        .pipe(sourcemaps.init())
        .pipe(postcss([
            require('cssnext'),
            require('precss'),
            require('postcss-partial-import'),
            require('autoprefixer')
        ]))
        //.pipe(nano())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.path.dist.css));
});