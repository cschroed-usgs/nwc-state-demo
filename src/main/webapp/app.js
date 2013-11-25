/*global angular*/
var stateDemoApp = angular.module('stateDemoApp', [
    'stateDemoApp.controllers',
    'stateDemoApp.sharedStateServices',
    'ui.router'
]);

stateDemoApp.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/workflowA');

        $stateProvider.state('workflowA', {
                    url: '/workflowA',
                    templateUrl: 'partials/workflowDescription.html',
                    controller: 'WorkflowA'
                })
                .state('workflowA.ColorSelection', {
                    url: '/step1',
                    templateUrl: 'partials/workflowA/Step1.html',
                    controller: 'ColorSelectionStep'
                })
                .state('workflowA.NumberSelection', {
                    url: '/step2',
                    templateUrl: 'partials/workflowA/Step2.html',
                    controller: 'NumberSelectionStep'
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
