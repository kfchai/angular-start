
window._ = require('lodash');

window.$ = window.jQuery = require('jquery');

require('bootstrap-sass');

import angular from 'angular';

import appcont from './angular/app.controller'

angular.module('app', [])
	.controller('AppController', appcont);