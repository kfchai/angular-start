
window._ = require('lodash');

window.$ = window.jQuery = require('jquery');

require('bootstrap-sass');
require('./test.ts');

import angular from 'angular';

import appcont from './angular/app.controller'

angular.module('app', [])
	.controller('AppController', appcont);