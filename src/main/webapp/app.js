/*global angular*/
var stateDemoApp = angular.module('stateDemoApp', [
    'stateDemoApp.controllers',
    'stateDemoApp.sharedStateServices',
    'ui.router'
]);

stateDemoApp.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
//        $urlRouterProvider.otherwise('/workflowA.ColorSelection');

        $stateProvider
                .state('workflow', {
                    url: '/workflow',
                    templateUrl: 'partials/AllWorkflowShell.html',
                    abstract: true
                })
                .state('workflow.workflowA', {
                    url: '/workflowA',
                    templateUrl: 'partials/workflowA/OneWorkflowShell.html',
                    controller: 'WorkflowA',
                    abstract: true
                })
                .state('workflow.workflowA.ColorSelection', {
                    url: '/step1',
                    templateUrl: 'partials/workflowA/Step1.html',
                    controller: 'ColorSelectionStep'
                })
                .state('workflow.workflowA.NumberSelection', {
                    url: '/step2',
                    templateUrl: 'partials/workflowA/Step2.html',
                    controller: 'NumberSelectionStep'
                })
                .state('workflow.workflowA.Final', {
                    url: '/final',
                    templateUrl: 'partials/workflowA/FinalA.html',
                    controller: 'FinalSelectionStep'
                });
    }
]);
//stateDemoApp.run(['$rootScope', function ($rootScope) {
//        var eventNames = ['$stateChangeStart', '$stateNotFound', '$stateChangeSuccess', '$stateChangeError', '$viewContentLoading', '$viewContentLoaded'];
//        var registerNamedHandler = function (name) {
//            $rootScope.on(name, function () {
//                alert(name);
//            });
//        };
//        angular.forEach(eventNames, registerNamedHandler);
//    }
//]);
