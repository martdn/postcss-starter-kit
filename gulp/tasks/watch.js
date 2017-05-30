'use strict';

if (devBuild) {
    const gulp          = require('gulp');
    const watch         = require('gulp-watch');
    const browserSync   = require("browser-sync");
    const reload         = browserSync.reload;
    const config        = require('../config');

    gulp.task('watch', ['build'], function () {
        watch(config.path.watch.css, function (file) {
            gulp.start('css:build', function () {
                console.log(file.event, file.path);
                reload({stream: true});
            });
        });

        watch(config.path.watch.js, function (file) {
            gulp.start('js:build', function () {
                console.log(file.event, file.path);
                reload({stream: true});
            });
        });
    });
};