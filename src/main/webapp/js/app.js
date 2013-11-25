/*global angular*/
var stateDemoApp = angular.module('stateDemoApp', [
	'stateDemoApp.controllers',
	'stateDemoApp.sharedStateServices',
       	'ui.router'
]);

stateDemoApp.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/workflowA');
		
                $stateProvider
                        .state('workflowA', {
                            url: '/workflowA',
                            templateUrl: 'partials/workflowA/description.html',
                            controller: 'WorkflowA'
                        })
                        .state('workflowA.step1', {
                            url: '/step1',
                            templateUrl: 'partials/workflowA/Step1.html',
                            controller: 'ColorSelectionStep'
                        })
                        .state('workflowA.step2', {
                            url: '/step2',
                            templateUrl: 'partials/workflowA/Step2.html',
                            controller: 'NumberSelectionStep'
                        });
                        
	}
]);
