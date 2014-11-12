angular.module("App", [
    'ngRoute',
    'ngResource'
])
    .config(function($routeProvider) {
        $routeProvider.when("/home", {
            templateUrl: "partials/home.html",
            controller: "IndexController"
        });
        $routeProvider.when("/lol", {
            templateUrl: "partials/lol.html",
            controller: "LolController"
        });
        $routeProvider.otherwise({
            redirectTo: "/home"
        });
    });