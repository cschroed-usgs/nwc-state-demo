/*global angular*/
(function(){
var sharedStateServices = angular.module('stateDemoApp.sharedStateServices', []);

var storedState = {
    _version: 0.1,
    _clientState: {
        name: undefined,
        params: {}
        
    }
};
//this factory provides access to the state that can be Stored to the server and shared between controllers
sharedStateServices.factory('StoredState', 
    function(){
        return storedState;
    }
);

//support sugarjs methods
var commonState = Object.extended();
var listeningToStoredState = false;

//map of key in StoredState to listener function as called by $rootScope.$watch()
var storedStateListeners = {
    favoriteColor : function(newValue, oldValue){
        if(newValue === 'blue'){
            commonState.favoriteColorDependent = 'BLUE DATA SET';
        }
        
    }
};
//this factory provides access to the state that is NOT stored to the server, but that
//can be shared between controllers
//generally, the commonState should NOT be written to by controllers, rather it should
//be written to by listeners on the StoredState
sharedStateServices.factory('CommonState', ['$rootScope',
    function($rootScope){
        if(!listeningToStoredState){
            angular.forEach(storedStateListeners, function(listener, propertyToObserve){

               $rootScope.$watch('StoredState['+propertyToObserve+']', listener); 
            });
            listeningToStoredState = true;
        }
        return commonState;
    }
]);
}());