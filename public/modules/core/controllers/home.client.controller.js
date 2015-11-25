'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;

        // Some example string
        $scope.helloText = 'Welcome to UtgAdmApp';
        $scope.descriptionText = 'It is an application for Utegration to manage our project, time, budget, etc.';
	}
]);