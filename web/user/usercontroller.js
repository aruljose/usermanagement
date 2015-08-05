
angular.module("mainApp", []).controller('UserController', ['$scope', function ($scope) {
    $scope.showForm = function () {

       // alert("testclick");
        $scope.mypopup = true;
    };
    
    /*  $scope.user = [];
      $scope.user.firstname = '';
      $scope.user.lastname = '';
      $scope.user.password = '';
      $scope.user.email = '';
      
      $scope.submit = function (){
          if($scope.user.firstname){
              $scope.user.push(this.user.firstname);
              $scope.user.firstname = '';
              
          }
          if($scope.user.lastname){
              $scope.user.push(this.user.lastname);
              $scope.user.lastname = '';
              
          }
          
      }; */
        
              $scope.masters = {};

      $scope.save = function(user) {
        $scope.masters = angular.copy(user);
        $scope.user.firstname = '';
        $scope.user.lastname = '';
        $scope.user.password = '';
        $scope.user.email = '';
          
          console.log($scope.masters);
      };

}]);