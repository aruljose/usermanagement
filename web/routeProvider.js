
app.config(function ($routeProvider) {
    $routeProvider
            .when("/",
                    {
                        templateUrl: 'login/loginview.html',
                        controller: 'LoginController'

                    })

            .when("/register",
                    {
                        templateUrl: 'partials/register.html'

                    })

            .otherwise({
                redirectTo: "/"
            });
});