'use strict';

const gulp        = require('gulp');
const gulpif      = require('gulp-if');
const rename      = require('gulp-rename');
const gulpsync    = require('gulp-sync')(gulp);
const uglify      = require('gulp-uglify');
const merge       = require('merge-stream');
const concat      = require('gulp-concat');
const babel       = require("gulp-babel");
const sourcemaps  = require('gulp-sourcemaps');
const config      = require('../config');

gulp.task('js:build', gulpsync.sync([
    'js:build:components'
]));

gulp.task('js:build:components', () => {
    gulp.src([
        config.path.node_modules + 'jquery/dist/jquery.min.js',
        config.path.src.js + '**/*.js'
    ])
        .pipe(babel())
        .pipe(gulpif(devBuild, sourcemaps.init()))
        .pipe(concat('app.js'))
        .pipe(gulp.dest(config.path.dist.js))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulpif(devBuild, sourcemaps.write('maps')))
        .pipe(gulp.dest(config.path.dist.js))
});

// Merge simple assets
// gulp.task('js:build:simple_assets', () => {
//     return merge(
//         gulp.src([
//             config.path.node_modules + 'jquery/dist/jquery.min.js'
//         ])
//             .pipe(concat('jquery.min.js'))
//             .pipe(gulp.dest(config.path.dist.js + '/compile')),
//
//         gulp.src([
//             config.path.node_modules + 'isotope-layout/dist/isotope.pkgd.min.js',
//         ])
//             .pipe(concat('isotope.min.js'))
//             .pipe(gulp.dest(config.path.dist.js + '/compile'))
//     )
// });