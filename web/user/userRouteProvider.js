
    app.config(function($routeProvider) {
        $routeProvider
                    
            .when('/user', {
                templateUrl : 'userdetail.html',
                //controller  : 'ProjectDetailController'
            })    
            .when('/design', {
                templateUrl : 'designphase.html',
                //controller  : 'ProjectDetailController'
            })
            .when('/engineering', {
                templateUrl : 'engineeringphase.html',
                //controller  : 'ProjectDetailController'
            })
            .when('/npi', {
                templateUrl : 'npi.html',
                //controller  : 'ProjectDetailController'
            })
            .when('/manufacturing', {
                templateUrl : 'manufacturingphase.html',
                //controller  : 'ProjectDetailController'
            })
            .when('/support', {
                templateUrl : 'supportphase.html',
                //controller  : 'ProjectDetailController'
            })
	    .otherwise({
            redirectTo: '/'
        });
    });

    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
