

app.controller('AdminController', ['$scope', function ($scope) {
        $scope.showAdminPopup = function () {

            $scope.adminFormPopup = true;

        };

        $scope.admins = [];

        $scope.saveAdmin = function () {
            $scope.admins.push({
                name: $scope.admin.name,
                address: $scope.admin.address,
                email: $scope.admin.email,
                phonenumber: $scope.admin.phonenumber

            });

            $scope.admin.name = "";
            $scope.admin.address = "";
            $scope.admin.email = "";
            $scope.admin.phonenumber = "";


        };

    }]);

