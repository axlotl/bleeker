'use strict';

/**
 * @ngdoc function
 * @name bleekerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bleekerApp
 */
angular.module('bleekerApp')
  .controller('MainCtrl', function ($scope) {
    $scope.formElements = [
      	'select',
		'text',
		'file',
		'image',
		'password',
		'checkbox',
		'radio',
		'email',
		'number',
		'range',
		'color',
		'date',
		'time'
    ];
  });
