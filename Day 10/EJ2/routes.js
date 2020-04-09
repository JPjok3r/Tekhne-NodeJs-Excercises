'use strict';

function routes(app) {
    console.log('Starting routes...');
    app.use('/api/fibonacci', require('./api/fibonacci'));
    app.use('/api/simplecal', require('./api/simplecalculator'));
    app.use('/api/palindrome', require('./api/palindromo'));
    app.use('/api/conjuntos', require('./api/Conjuntos'));
    app.use('/api/calcular', require('./api/calcomplex'));
}

module.exports = routes;