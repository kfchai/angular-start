const elixir = require('laravel-elixir');

 elixir.config.publicPath = 'public';
 elixir(mix => {
 	mix.sass('app.scss')
 	.webpack('app.js');
 });