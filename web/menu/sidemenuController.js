    var myApp = angular.module('myApp', ['ngRoute']);

    myApp.config(function($routeProvider) {

        $routeProvider

            .when('/', {

                templateUrl : 'help.html',

                controller  : 'HelpCtrl'

            })

            .when('/login', {

                templateUrl : 'login.html',

                controller  : 'IndexCtrl'

            })
            
	    .otherwise({
            redirectTo: '/'
        });
    });


    

