
    app.controller('LoginController', function ($scope, $window) {			
    $scope.submitForm = function () {

        if ($scope.userForm.$valid) {
           
        }

    };
    
    $scope.redirectSideMenu = function () {
        $window.location.href = 'menu/sidemenus.html';        
    };
    
    $scope.redirectUserindex = function () {alert("user");
        $window.location.href = 'user/userindex.html';        
    };
    
     $scope.redirectEnterprise = function () {
        $window.location.href = 'menu/enterprisemenu.html';        
    };

});