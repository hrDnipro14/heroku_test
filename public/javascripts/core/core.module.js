// (function(){
//     angular.module('app.core', ['ngRoute'])
//     .config(function($routeProvider, $locationProvider){
//         $routeProvider
//             .when('/admin/index', {
//                 templateUrl: '/views/pages/dashboard/dashboard.html',
//                 controller: "homeController"
//             })
//             .when('/admin/forms',{
//                 templateUrl: '/views/pages/forms/basic_elements.html',
//                 controller: 'homeController'
//             })
//             .otherwise({
//                 templateUrl: '/views/pages/dashboard/dashboard.html'
//             })
        
//             $locationProvider.html5Mode({
//                 enabled: true,
//                 requireBase: false
//             });
//     });
// }())