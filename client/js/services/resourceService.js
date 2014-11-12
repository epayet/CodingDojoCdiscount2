angular.module('App').factory('ResourceService',
    function (Resource) {
        return {
            get: function(successCallback, errorCallback) {
                return Resource.get(successCallback, errorCallback);
            }
        };
    });