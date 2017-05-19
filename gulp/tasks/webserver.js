'use strict';

if (devBuild) {
    const gulp        = require('gulp');
    const gutil       = require('gulp-util');
    const watch       = require('gulp-watch');
    const express     = require('gulp-express2');
    const browserSync = require("browser-sync");
    const reload      = browserSync.reload;
    const config      = require('../config');

    gulp.task('webserver', function() {
        const errLogger = function() { gutil.log(gutil.colors.red.apply(undefined, arguments)) };
        const app = express(config.express, gutil.log, errLogger);
        app.run(); //start express server

        browserSync.init(null, {
            proxy: "http://localhost:5000",
            files: [
                config.path.dist.css + '**/*.css',
                config.path.dist.js + '**/*.js'
            ],
            browser: "google chrome",
            port: 7000
        });

        watch([
            config.path.watch.twig,
            config.path.watch.app
        ], function(file) {
            app.run();
            setTimeout(function() {
                app.notify(file);
                reload();
            }, 1000);
        });
    });
}