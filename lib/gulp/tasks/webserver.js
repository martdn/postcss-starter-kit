'use strict';

const gulp        = require('gulp');
const browserSync = require("browser-sync");
const config      = require('../config');

gulp.task('webserver', function () {
    browserSync(config.webServer);
});