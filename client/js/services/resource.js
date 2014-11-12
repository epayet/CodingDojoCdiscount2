angular.module('App').factory('Resource',
    function ($resource) {
        return $resource('http://localhost:8081/resource');
    });