/*global angular*/
var stateDemoApp = angular.module('stateDemoApp', [
	'ngRoute',
	'stateDemoControllers',
	'sharedStateServices'
]);

stateDemoApp.config(['$routeProvider', 
    function ($routeProvider) {
		$routeProvider.
			when('/step1', {
				templateUrl: 'partials/Step1.html',
				controller: 'Step1Ctrl'
			}).
			otherwise({
				redirectTo: '/step1'
			});
	}
]);
