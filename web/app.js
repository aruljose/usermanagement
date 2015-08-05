/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var app = angular.module('userManagement', ['ngRoute']);
app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
            .when('/login',
                    {
                        templateUrl: 'partials/login.html'

                    })

            .when('/register',
                    {
                        templateUrl: 'partials/register.html'

                    })


            .otherwise({
                redirectTo: '/'
            });
});