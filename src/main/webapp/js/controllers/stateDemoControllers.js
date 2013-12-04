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
        if(!config || !config.name || !config.description){
            throw new Error("Mandatory Step variables not Defined.");
        }
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
    if(!config || !config.name || !config.description){
        throw new Error("Mandatory Step variables not Defined.");
    }
    return function($scope, SharedState){
      $scope.name = config.name;
      $scope.description = config.description;
      $scope.state = SharedState;
      customControllerFunction.apply({}, arguments);
  };
};



stateDemoControllers.controller('ColorSelectionStep', ['$scope', 'SharedState',
    StepController(
        {
            name: 'My name is: color selection',
            description: 'In this step, you can pick your favorite color'
        },
        function ($scope, SharedState) {
            $scope.form = {};
            $scope.$watch('form.favoriteColor', function(newValue, oldValue){
               if( (newValue !== oldValue) && (SharedState.favoriteColor !== newValue) ){
                   $scope.state.favoriteColor = newValue;
               } 
            });
            $scope.$watch('state.favoriteColor', function(newValue, oldValue){
                if($scope.form.favoriteColor !== newValue ){    
                    $scope.form.favoriteColor = newValue;
                }
            });
            $scope.colors = [
                'yellow',
                'blue'
            ];
            
            console.dir(SharedState);
        }
    )
]);
stateDemoControllers.controller('NumberSelectionStep', ['$scope', 'SharedState',
    StepController(
        {
            name: 'My name is: number selection',
            description: 'In this step you can pick your very own favorite number'
        },
        function ($scope, SharedState) {
            
            console.dir(SharedState);
            
        }
    )
]);
stateDemoControllers.controller('FinalStep', ['$scope', 'SharedState', '$state',
    StepController(
        {
            name: 'Final Step',
            description: "You're all done!"
        },
        function ($scope, SharedState, $state) {
            SharedState._clientState.name = $state.current.name;
            SharedState._clientState.params = $state.params;
            console.dir(SharedState);
        }
    )
]);


}());