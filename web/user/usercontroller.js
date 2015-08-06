
app.controller('UserController', ['$scope', function ($scope) {
        $scope.showUserForm = function () {

            $scope.userFormPopup = true;
        };

        $scope.users = [];

        $scope.saveUser = function () {

            $scope.users.push({
                firstname: $scope.user.firstname,
                lastname: $scope.user.lastname,
                password: $scope.user.password,
                email: $scope.user.email,
                enterprise: $scope.user.enterprise
            });

            $scope.user.firstname = "";
            $scope.user.lastname = "";
            $scope.user.password = "";
            $scope.user.email = "";
            $scope.user.enterprise = "";
            
            

        };

    }]);