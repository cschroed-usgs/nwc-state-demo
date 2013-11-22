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
                        when('/step2', {
				templateUrl: 'partials/Step2.html',
				controller: 'Step2Ctrl'
			}).
			otherwise({
				redirectTo: '/step1'
			});
	}
]);
