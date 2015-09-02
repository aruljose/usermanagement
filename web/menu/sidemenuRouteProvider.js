
    app.config(function($routeProvider) {
        $routeProvider
        .when('/', {
                templateUrl : 'templatefrontpage.html'
                
            })
            
            .when('/template', {
                templateUrl : 'templatefrontpage.html'
                
            })
            
            .when('/user', {
                templateUrl : '../user/userview.html',
                controller  : 'UserController'
            })
            
            
            .when('/enterprise', {
                templateUrl : '../enterprise/enterpriseview.html',
                controller  : 'EnterpriseController'
            })
            
            
   
            
	    .otherwise({
            redirectTo: '/'
        });
    });

    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
