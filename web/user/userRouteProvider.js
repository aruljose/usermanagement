
    app.config(function($routeProvider) {
        $routeProvider
                    
            .when('/user', {
                templateUrl : 'userdetail.html',
                controller  : 'ProjectDetailController'
            })          
            
	    .otherwise({
            redirectTo: '/'
        });
    });

    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
