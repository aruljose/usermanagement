
var app = angular.module('myApp', []);
app.controller('logincontroller', function ($scope) {

    // function to submit the form after all validation has occurred			
    $scope.submitForm = function () {

        if ($scope.userForm.$valid) {
            alert('');
        }

    };

});