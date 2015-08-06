
    app.controller('LoginController', function ($scope, $window) {			
    $scope.submitForm = function () {

        if ($scope.userForm.$valid) {
           
        }

    };
    
    $scope.redirectSideMenu = function () {
        $window.location.href = 'menu/sidemenus.html';        
    };

});