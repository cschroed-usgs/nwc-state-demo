/*global angular*/
(function(){
var sharedStateServices = angular.module('stateDemoApp.sharedStateServices', []);

var sharedStateObject = {
    _version: 0.1,
    _clientState: {
        name: undefined,
        params: {}
        
    }
};
        
sharedStateServices.factory('SharedState', 
    function(){
        return sharedStateObject;
    }
);
}());