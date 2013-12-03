/*global angular*/
(function(){
var sharedStateServices = angular.module('stateDemoApp.sharedStateServices', []);

var sharedStateObject = {
    version: 0.1
};
        
sharedStateServices.factory('SharedState', 
    function(){
        return sharedStateObject;
    }
);
}());