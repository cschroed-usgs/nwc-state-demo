/*global angular*/
var stateDemoControllers = angular.module('stateDemoApp.controllers', []);

stateDemoControllers.controller('WorkflowA', ['$scope', 
    function ($scope) {
        $scope.name = "The \"A\" Workflow!";
        $scope.description = "A wonderful workflow in which we make selections and demostrate the ability to store and restore state.";
        var stepNumber = stepNumber || 0;
        var steps = ['ColorSelection', 'NumberSelection'];
        var nextStepNumber, nextStep;
        var previousStepNumber, previousStep;
        
        var updateStepVars = function(){
            if(stepNumber+1 < steps.length){
                nextStepNumber = stepNumber + 1;
                nextStep = steps[nextStepNumber];
            }
            else{
                nextStepNumber = -1;
                nextStep = '';
            }
            if(stepNumber>0){
                previousStepNumber = stepNumber - 1;
                previousStep = steps[previousStepNumber];
            }
            else{
                previousStepNumber = -1;
                previousStep = '';
            }
        };
        //initialize on controller instantiation
        updateStepVars();
        $scope.goToNextStep = function(){
            stepNumber++;
            updateStepVars();
        };
        $scope.goToPreviousStep = function(){
            stepNumber--;
            updateStepVars();
        };
        
        $scope.stepNumber = stepNumber;
        $scope.steps = steps;
        $scope.nextStepNumber = nextStepNumber;
        $scope.nextStep = nextStep;
        $scope.previousStepNumber = previousStepNumber;
        $scope.previousStep = previousStep;
        
        
    }
]);
stateDemoControllers.controller('ColorSelectionStep', ['$scope', 
    function ($scope) {
        $scope.name = "The color step!";
    }
]);
stateDemoControllers.controller('NumberSelectionStep', ['$scope', 
    function ($scope) {
        $scope.name = "The Number step!";
    }
]);