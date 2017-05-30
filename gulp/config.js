'use strict';

const frontend      = './frontend/';
const urlPublic     = './public/';

const _src       = './src/';
const _dist      = 'dist/';
const _js        = 'js/';
const _css       = 'css/';
const _img       = 'img/';
const _fonts     = 'fonts/';

const node_modules     = './node_modules/';

module.exports = {
    path: {
        dist: {
            js      : urlPublic + _dist + _js,
            css     : urlPublic + _dist + _css
        },
        src: {
            js      : frontend + _src + _js,
            css     : frontend + _src + _css
        },
        watch: {
            js      : frontend + _src + _js + '**/*.js',
            css     : frontend + _src + _css + '**/*.css',
            app     : frontend + 'app/**/*.*',
            twig    : frontend + 'views/**/*.twig'
        },
        node_modules: node_modules,
        urlPublic   : urlPublic
    },
    express : frontend + 'app/app.express.js',
};