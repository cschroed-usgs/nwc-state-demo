/*global angular*/
var stateDemoApp = angular.module('stateDemoApp', [
	'ui.router',
	'stateDemoControllers',
	'sharedStateServices'
]);

stateDemoApp.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
                $urlRouterProvider.otherwise('#/workflowA');
		
                $stateProvider
                        .state('workflowA', {
                            url: '#/workflowA',
                            templateUrl: 'partials/workflowA/description.html',
                            controller: 'Step1Ctrl'
                        })
                        .state('workflowA.step1', {
                            url: '/step1',
                            templateUrl: 'partials/workflowA/Step1.html'
                        })
                        .state('workflowA.step2', {
                            url: '/step2',
                            templateUrl: 'partials/workflowA/Step2.html'
                        });
	}
]);
