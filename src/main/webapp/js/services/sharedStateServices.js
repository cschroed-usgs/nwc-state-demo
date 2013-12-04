/*global angular*/
(function(){
var sharedStateServices = angular.module('stateDemoApp.sharedStateServices', []);

var sharedStateObject = {
    _version: 0.1,
    _clientState: {}
};
        
sharedStateServices.factory('SharedState', 
    function(){
        return sharedStateObject;
    }
);
}());