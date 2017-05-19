const requireDir = require('require-dir');

global.devBuild = process.env.NODE_ENV !== 'production';
console.log('env = ' + process.env.NODE_ENV);

requireDir('./gulp/tasks', { recurse: true });