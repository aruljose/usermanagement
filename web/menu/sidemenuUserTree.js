
    app.config(function($routeProvider) {
        $routeProvider
        .when('/', {
            templateUrl : 'hardwareandsoftware.html'
                
            })
            
            .when('/generaldescription', {
            templateUrl : '../sections/document.html'
                
            })
            
   
            
	    .otherwise({
            redirectTo: '/'
        });
    });

    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
    
    
    $(document).ready(function () {
	$('label.tree-toggler').click(function () {
		$(this).parent().children('ul.tree').toggle(300);
	});
});

$('.tree-toggle').click(function () {
	$(this).parent().children('ul.tree').toggle(200);
});