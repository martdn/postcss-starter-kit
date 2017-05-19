'use strict';

const express   = require('express');
const app       = express();
const Twig      = require('twig'); // Twig module
const twig      = Twig.twig;       // Render function

Twig.extendFunction('asset', function(value) {
    return '/public/' + value;
});

app.set('views', 'frontend/views');
app.set('view engine', 'twig');
app.set("twig options", {
    strict_variables: false,
    // namespaces: { 'my-project': "/src/views" }
});

app.get('/', function(req, res) {
    res.render('index');
});

app.use('/frontend', express.static('frontend'));
app.use('/gulp', express.static('gulp'));
app.use('/public', express.static('public'));
app.use('/node_modules', express.static('node_modules'));

app.listen(5000);