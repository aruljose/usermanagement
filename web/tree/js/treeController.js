(function () {
  'use strict';

  angular.module('demoApp')
    .controller('BasicExampleCtrl', ['$scope', function ($scope) {
      $scope.remove = function (scope) {
        scope.remove();
      };

      $scope.toggle = function () {
          alert("this");
        //scope.toggle();
      };

      

      $scope.newSubItem = function (scope) {
        var nodeData = scope.$modelValue;
        nodeData.nodes.push({
          id: nodeData.id,
          title: nodeData.title,
          nodes: []
        });
      };

      

      $scope.data = [{
        'id': '',
        'title': '',
        'nodes': []
          
      }];
    }]);

}());
