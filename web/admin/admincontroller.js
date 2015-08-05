var mainApp = angular.module("mainApp", []);

mainApp.controller('AdminController', function ($scope) {
    $scope.showAdmin = function () {

        alert("admin");
        
    };

});

