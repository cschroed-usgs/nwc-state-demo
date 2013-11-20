var sharedStateServices = angular.module('sharedStateServices', []);

sharedStateServices.factory('SharedState', [
    function(){
        return function(){
            return {};
        };
    }
]);