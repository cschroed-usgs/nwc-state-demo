/*global angular*/
var stateDemoControllers = angular.module('stateDemoApp.controllers', []);

stateDemoControllers.controller('WorkflowA', ['$scope', 
    function ($scope) {
        $scope.name = "The \"A\" Workflow!";
    }
]);
stateDemoControllers.controller('ColorSelectionStep', ['$scope', 
    function ($scope) {
        $scope.name = "The color step!";
    }
]);
stateDemoControllers.controller('NumberSelectionStep', ['$scope', 
    function ($scope) {
        $scope.name = "The color step!";
    }
]);