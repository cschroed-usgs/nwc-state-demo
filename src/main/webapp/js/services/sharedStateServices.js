/*global angular*/
var sharedStateServices = angular.module('stateDemoApp.sharedStateServices', []);

sharedStateServices.factory('SharedState', [
    function(){
        return function(){
            return {
                color: 'blue',
                number: 42
            };
        };
    }
]);