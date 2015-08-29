
    app.config(function($routeProvider) {
        $routeProvider
        .when('/', {
                templateUrl : 'templatefrontpage.html'
                
            })
            
            
            .when('/product', {
                templateUrl : 'stagesview.html',
                controller  : 'TreeController'
            })
            
            .when('/sharing', {
                templateUrl : 'sharing.html'
                
            })
   
            
	    .otherwise({
            redirectTo: '/'
        });
    });

    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
