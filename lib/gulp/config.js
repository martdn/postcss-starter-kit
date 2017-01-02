'use strict';

let _src    = './src/';
let _dist   = './dist/';

let _js     = 'js/';
let _css    = 'css/';
let _img    = 'img/';
let _fonts  = 'fonts/';

module.exports = {
    path: {
        dist: {
            js: _dist + _js,
            css: _dist + _css,
            img: _dist + _img,
            fonts: _dist + _fonts
        },
        src: {
            js: _src + _js + 'main.js',
            css: _src + _css + 'main.css',
            img: _src + _img +'**/*.*',
            fonts: _src + _fonts + '**/*.*'
        },
        watch: {
            js: _src + _js + '**/*.js',
            css: _src + _css +'*/*.css',
            img: _src + _img +'**/*.*',
            fonts: _src + _fonts + '**/*.*'
        }
    },
    webServer: {
        //proxy: "http://localhost:5000",
        files: ["dist/**/*.css"],
        browser: "google chrome",
        port: 7000,
        ui: false
    }
};