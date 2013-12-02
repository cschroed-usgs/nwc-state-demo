/*global angular*/
(function(){
    var stateDemoControllers = angular.module('stateDemoApp.controllers', []);
    /**
     * @param config
     *      @param config.name Human-facing workflow name
     *      @param config.description Human-facing workflow description
     *      @param {Function} customControllerFunction custom behavior
     * @returns controller function to be used in a call to <module>.controller()
     */
    var WorkflowController = function(config, customControllerFunction){
        return function($scope){
            $scope.name = config.name;
            $scope.description = config.description;

            customControllerFunction.apply(arguments);
        };
    };

stateDemoControllers.controller('WorkflowA', ['$scope', 
    function ($scope) {
        $scope.name = "The \"A\" Workflow!";
        $scope.description = "A wonderful workflow in which we make selections and demostrate the ability to store and restore state.";

    }
]);

/**
 * 
 * @param config
 *  @param config.name the human-facing step name
 *  @param config.description the human-facing description
 * @param {Function} customControllerFunction
 * @returns controller function for use in a call to <module>.controller()
 */

var StepController = function(config, customControllerFunction){
  return function($scope){
      $scope.name = config.name;
      $scope.description = config.description;
      customControllerFunction.apply(arguments);
  };
};



stateDemoControllers.controller('ColorSelectionStep', ['$scope', 
    StepController(
        {
            name: 'My name is: color selection',
            description: 'In this step, you can pick your favorite color'
        },
        function ($scope) {
            console.dir($scope);
        }
    )
]);
stateDemoControllers.controller('NumberSelectionStep', ['$scope', 
    StepController(
        {
            name: 'My name is: number selection',
            description: 'In this step you can pick your very own favorite number'
        },
        function ($scope) {
            console.dir($scope);
        }
    )
]);

}());