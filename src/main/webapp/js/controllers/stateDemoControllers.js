/*global angular*/
var stateDemoControllers = angular.module('stateDemoControllers', []);
(function () {
    var GenericStepCtrl = function(stepInfo, controllerFunction){
        return function ($scope) {
            $scope.$parent.previousStep = stepInfo.previous;
            $scope.$parent.nextStep = stepInfo.next;
            controllerFunction.apply(this, arguments);
        };
    };
    var Step1 = function(){
    
    }
    stateDemoControllers.controller('Step1Ctrl', ['$scope', 'SharedState',
        GenericStepCtrl(
            })
    ]);

    stateDemoControllers.controller('Step2Ctrl', ['$scope', 'SharedState',
        function ($scope, SharedState) {

        }
    ]);
}());
