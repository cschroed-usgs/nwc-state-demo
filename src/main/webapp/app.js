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
                            templateUrl: 'partials/workflowA/description.html',
                     controller: 'WorkflowA'
                })
                .state('workflowA.step1', {
                    url: '/step1',
                            templateUrl: 'partials/workflowA/Step1.html',
                    template: '<h3>step1</h3>',
                    controller: 'ColorSelectionStep'
                })
                .state('workflowA.step2', {
                    url: '/step2',
                            templateUrl: 'partials/workflowA/Step2.html',
                    template: '<h3>step2</h3>',
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
