const mix = require('laravel-mix');

mix.js('beatup/src/js/app.js', 'beatup/public/js')
    .setPublicPath('beatup/public');
