var stateDemoApp = angular.module('stateDemoApp', [
	'ngRoute',
	'stateDemoControllers',
	'sharedStateService'
]);

stateDemoApp.config(['$routeProvider', 
    function ($routeProvider) {
		$routeProvider.
			when('/step1', {
				templateUrl: 'partials/step1.html',
				controller: 'Step1Ctrl'
			}).
			otherwise({
				redirectTo: '/'
			});
	}
]);
