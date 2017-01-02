'use strict';

const gulp       = require('gulp');
const watch      = require('gulp-watch');
const config     = require('../config');

gulp.task('watch', function(){
    watch([config.path.watch.css], function(event, cb) {
        gulp.start('css:build');
    });
    // watch([config.path.watch.js], function(event, cb) {
    //     gulp.start('js:build');
    // });
});