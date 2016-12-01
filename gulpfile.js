const elixir = require('laravel-elixir');

require('laravel-elixir-webpack-ts');

 elixir(mix => {
 	mix.sass('app.scss')
 	.webpack('app.js');
 });