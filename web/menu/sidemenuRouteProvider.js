
    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl : '../user/userview.html',
                controller  : 'UserController'
            })
            .when('/enterprise', {
                templateUrl : '../enterprise/enterpriseview.html',
                controller  : 'EnterpriseController'
            })      
            
            .when('/admin', {
                templateUrl : '../admin/adminview.html',
                controller  : 'AdminController'
            })
            
	    .otherwise({
            redirectTo: '/'
        });
    });

    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });