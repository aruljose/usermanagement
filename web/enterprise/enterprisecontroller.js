var mainApp = angular.module("mainApp", []);

mainApp.controller('EnterpriseController', ['$scope', function ($scope) {
        $scope.showForm = function () {
            $scope.enterprisepopup = true;
        }
        $scope.enterprises = [];
        $scope.saveEnterprise = function () {
            $scope.enterprises.push({
                name: $scope.enterprise.name,
                contact: $scope.enterprise.contact,
                address: $scope.enterprise.address,
                email: $scope.enterprise.email,
            });
            $scope.enterprise.name = "";
            $scope.enterprise.contact = "";
            $scope.enterprise.address = "";
            $scope.enterprise.email = "";
        };
    }]);
