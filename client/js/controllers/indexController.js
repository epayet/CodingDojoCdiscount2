angular.module("App").controller("IndexController",
    function ($scope, ResourceService) {
        $scope.resource = ResourceService.get(successCallback, errorCallback);

        function successCallback(data) {
            console.log('success');
        }

        function errorCallback(error) {
            console.log('error');
        }
    });