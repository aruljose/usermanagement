

angular.module("mainApp", []).controller('AdminController', ['$scope', function ($scope) {
        $scope.showAdminPopup = function () {

            //alert("admin");
            $scope.adminFormPopup = true;

        };

        $scope.admins = [];

        $scope.saveAdmin = function () {
            $scope.admins.push({
                name: $scope.admin.name,
                contact: $scope.admin.contact,
                email: $scope.admin.email,
                phonenumber: $scope.admin.phonenumber

            });

            $scope.admin.name = "";
            $scope.admin.contact = "";
            $scope.admin.email = "";
            $scope.admin.phonenumber = "";


        };

    }]);

