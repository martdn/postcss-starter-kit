'use strict';

const gulp        = require('gulp');
const gulpif      = require('gulp-if');
const rename      = require('gulp-rename');
const gulpsync    = require('gulp-sync')(gulp);
const merge       = require('merge-stream');
const concat      = require('gulp-concat');
const nano        = require('gulp-cssnano');
const sourcemaps  = require('gulp-sourcemaps');
const postcss     = require('gulp-postcss');
const config      = require('../config');

gulp.task('css:build', gulpsync.sync([
    'css:build:postcss',
    'css:build:simple_assets',
    'css:build:group_assets'
]));

gulp.task('css:build:postcss', () => {
    return gulp.src([
        config.path.src.css + '**/*.css',
        '!' + config.path.src.css + '**/*.post.css'
    ])
        .pipe(postcss([
            require('postcss-partial-import')({
                extension: '.post.css'
            }),
            require('postcss-cssnext'),
            require('postcss-discard-comments'),
            require('postcss-nested'),
            require('postcss-inline-svg')({
                path : config.path.web + 'assets/'
            }),
            require('postcss-assets')({
                loadPaths: [ config.path.web + 'assets/' ],
                cachebuster: true
            }),
            require('postcss-browser-reporter'),
            require('postcss-reporter')
        ]))
        .pipe(concat('dist_postcss.css'))
        .pipe(gulp.dest(config.path.dist.css + 'compile/'));
});

gulp.task('css:build:simple_assets', () => {
    return merge(
        //normalize
        gulp.src([
            config.path.node_modules + '/normalize.css/normalize.css'
        ])
            .pipe(concat('normalize.css'))
            .pipe(gulp.dest(config.path.dist.css + 'compile/'))
    )
});

gulp.task('css:build:group_assets', () => {
    return merge(
        gulp.src([
            config.path.dist.css + 'compile/normalize.css',
            config.path.dist.css + 'compile/dist_postcss.css'
        ])
            .pipe(gulpif(devBuild, sourcemaps.init({loadMaps: true})))
            .pipe(concat('main.css'))
            .pipe(nano({zindex: false}))
            .pipe(rename({suffix: '.min'}))
            .pipe(gulpif(devBuild, sourcemaps.write('.')))
            .pipe(gulp.dest(config.path.dist.css))
    )
});