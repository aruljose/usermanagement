
    app.config(function($routeProvider) {
        $routeProvider
        .when('/', {
                templateUrl : 'templatefrontpage.html'
                
            })
            
            
            
            .when('/enterprise', {
                templateUrl : '../enterprise/enterprisenew.html'
            })
            
            
           /* .when('/enterprise', {
                templateUrl : '../enterprise/enterpriseview.html',
                controller  : 'EnterpriseController'
            })*/
            
            
   
            
	    .otherwise({
            redirectTo: '/'
        });
    });

    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
