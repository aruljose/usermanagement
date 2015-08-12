angular.module('userManagementApp', [])
    .controller('TreeController', ['$scope', function($scope) {
      
     /* $scope.click = function () {
          alert("click");
          
      };*/
            
            
            
            
      
      $scope.delete = function(data) {
        data.nodes.length  = [];
    };
    $scope.add = function(data) {
        var post = data.nodes.length + 1;
        var newNode = data.name + post + '.';
        data.nodes.push({name: newNode,nodes: []});
    };
    
   /* $scope.toggle = function () {
        alert("toggle");
        $scope.showhide = true;
    };*/
    
    $scope.tree = [{
         name: "", 
         nodes: []
     }];
    
    }]);