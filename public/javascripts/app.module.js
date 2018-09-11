(function(){
    angular.module('myApp', ['ngRoute'])
    .config(function($routeProvider, $locationProvider){
        $routeProvider
            .when('/index', {
                templateUrl: '/views/pages/dashboard/dashboard.html',
                controller: "homeController"
            })
            .when('/forms',{
                templateUrl: '/views/pages/forms/basic_elements.html',
                controller: 'homeController'
            })
            .otherwise({
                templateUrl: '/views/pages/dashboard/dashboard.html'
            })
        
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
            $locationProvider.hashPrefix('!');
    })
    .controller('homeController', function(){
        alert('ok')
    });
}())