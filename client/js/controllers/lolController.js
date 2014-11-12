angular.module("App").controller("LolController",
    function ($scope) {
        $scope.test = "lol";

        $scope.sayHello = function() {
            alert('Hello ' + $scope.test);
        };
    });